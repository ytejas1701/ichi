import { onRequest } from "firebase-functions/v2/https";
import { onSchedule } from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";

import * as kanjiCorpus from "./kanji_corpus.json";
import * as vocabCorpus from "./vocab_corpus.json";

admin.initializeApp();

const isLearnUnlockable = (itemData: object): boolean => {
  if (!itemData) return false;

  let numUnpassedSlots = 0;
  Object.entries(itemData).forEach(([itemId, item]) => {
    if (item.isPassed) return;
    numUnpassedSlots += itemId[0] === "k" ? 2 : 1;
  });
  return numUnpassedSlots <= 4;
};

const isVocabUnlockable = ({
  vocab,
  itemData,
}: {
  vocab: any;
  itemData: any;
}): boolean => {
  const kanjiComposition = vocab.composition;
  for (let i = 0; i < kanjiComposition.length; i++) {
    const itemId = kanjiComposition[i];
    if (!itemData[itemId] || !itemData[itemId].isPassed) return false;
  }
  return true;
};

const getUnlockedVocab = ({
  count,
  itemData,
}: {
  count: number;
  itemData: any;
}): string[] => {
  let unlockedVocabs: string[] = [];

  Object.entries(vocabCorpus).forEach(([vocabId, vocab]) => {
    if (unlockedVocabs.length >= count) return;
    if (itemData[vocabId]) return;
    if (!isVocabUnlockable({ vocab, itemData })) return;
    unlockedVocabs.push(vocabId);
  });

  return unlockedVocabs;
};

const getUnlockedKanji = ({
  count,
  itemData,
}: {
  count: number;
  itemData: any;
}): string[] => {
  let unlockedKanjis: string[] = [];

  Object.entries(kanjiCorpus).forEach(([kanjiId, _]) => {
    if (unlockedKanjis.length >= count) return;
    if (itemData[kanjiId]) return;
    unlockedKanjis.push(kanjiId);
  });

  return unlockedKanjis;
};

export const unlockNewItems = onSchedule("every day 06:00",
  async (event) => {
    const itemDataCollection = admin.firestore().collection("itemData");
    const itemDataDoc = itemDataCollection.doc("8fh39s");
    const itemData = (await itemDataDoc.get()).data();
    if (!itemData || !isLearnUnlockable(itemData)) return console.log("no new items unlocked");

    let unlockedItemIds: string[] = getUnlockedVocab({ count: 4, itemData });
    const kanjiCount: number = Math.floor((8 - unlockedItemIds.length) / 2);
    unlockedItemIds = [
      ...unlockedItemIds,
      ...getUnlockedKanji({ count: kanjiCount, itemData }),
    ];

    const newItemData: any = {};

    unlockedItemIds.forEach((itemId) => {
      newItemData[itemId] = {
        isPassed: false,
        stage: 0,
        mnemonic: "",
      };
    });

    itemDataDoc.set({ ...newItemData }, { merge: true });

    console.log(`items ${unlockedItemIds} unlocked`);
  }
);

export const updateMnemonic = onRequest(
  { cors: true },
  async (request, response) => {
    const { itemId, mnemonic }: { itemId: string; mnemonic: string } =
      JSON.parse(request.body);
    const itemDataCollection = admin.firestore().collection("itemData");
    const itemDataDoc = itemDataCollection.doc("8fh39s");
    itemDataDoc.set({ [itemId]: { mnemonic } }, { merge: true });
    response.send({
      message: `mnemonic of item ${itemId} updated to "${mnemonic}"`,
    });
  }
);

const clipStageNumber = (stage: number) => {
  return Math.min(6, Math.max(1, stage));
};

const getNewStage = ({
  numMistakes,
  currStage,
}: {
  numMistakes: number;
  currStage: number;
}): number => {
  if (numMistakes === 0) return clipStageNumber(currStage + 1);
  if (numMistakes === 1) return clipStageNumber(currStage - 1);
  if (numMistakes >= 4) 1;
  return clipStageNumber(Math.ceil(currStage / 2));
};

const stageTimings: any = {
  1: 1,
  2: 2,
  3: 4,
  4: 12,
  5: 36,
  6: 108,
};

export const finishReview = onRequest(
  { cors: true },
  async (request, response) => {
    const {
      reviewData,
    }: { reviewData: { itemId: string; numMistakes: number }[] } = JSON.parse(
      request.body
    );

    const itemDataCollection = admin.firestore().collection("itemData");
    const itemDataDoc = itemDataCollection.doc("8fh39s");
    const itemData = (await itemDataDoc.get()).data() as any;

    let newData: any = {};
    let itemIds: string[] = [];

    for (let item of reviewData) {
      const { itemId, numMistakes } = item;

      const currStage = itemData[itemId].stage;
      const newStage = getNewStage({ numMistakes, currStage });

      let newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + stageTimings[newStage]);

      const currIsPassed = itemData[itemId].isPassed;

      newData[itemId] = {
        dueDate: newDueDate,
        stage: newStage,
        isPassed: currIsPassed || newStage >= 4,
      };
      itemIds.push(item.itemId);
    }

    itemDataDoc.set(newData, { merge: true });
    response.send({ message: `review finished for items ${itemIds}.` });
  }
);

export const finishLesson = onRequest(
  { cors: true },
  async (request, response) => {
    const { lessonData }: { lessonData: { itemId: string }[] } = JSON.parse(
      request.body
    );

    const itemDataCollection = admin.firestore().collection("itemData");
    const itemDataDoc = itemDataCollection.doc("8fh39s");

    const newStage = 1;

    let newDueDate = new Date();
    newDueDate.setDate(newDueDate.getDate() + stageTimings[newStage]);

    let newData: any = {};
    let itemIds: string[] = [];

    for (let item of lessonData) {
      newData[item.itemId] = { dueDate: newDueDate, stage: newStage };
      itemIds.push(item.itemId);
    }

    itemDataDoc.set(newData, { merge: true });
    response.send({ message: `lesson finished for items ${itemIds}.` });
  }
);
