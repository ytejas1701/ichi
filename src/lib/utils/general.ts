import type { Card, MistakesData } from "$lib/interfaces/card";
import { InputType, type Size } from "$lib/interfaces/general";
import { ItemType, type Item, type ItemId, type Kanji, type MorphItem, type Vocab } from "$lib/interfaces/item";
import { getItemFromId, isItemKanji, isItemVocab } from "./item";

export const getSizePropFromNumCells = (numCells: number): string => {
  return `calc(${numCells} * var(--CELL_SIZE) + ${
    numCells - 1
  } * var(--GAP_SIZE))`;
};

export const sleep = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const getSizeFromItemType = (itemType: ItemType): Size => {
  if (itemType === ItemType.KANJI) return { heightCells: 4, widthCells: 4 };
  return { heightCells: 4, widthCells: 8 };
};

export const getMorphItemFromItem = (item: Item): MorphItem => {
  if (isItemKanji(item)) return { item: item.kanji, type: ItemType.KANJI };
  return { item: item.vocab, type: ItemType.VOCAB };
};

export const getCompositionKanjis = (vocab:Vocab):string[]=>{
    return vocab.composition.map((kanjiId) => (getItemFromId(kanjiId) as Kanji).kanji)
}

export const getPlaceholderFromInputType = (inputType:InputType):string=>{
  return inputType===InputType.MEANING ? "meaning" : "reading"
}

export const getFinishLessonBody = (itemIds:ItemId[]):{lessonData: ({itemId:string})[]}=>{
  return {lessonData: itemIds.map(itemId=>({itemId}))}
}

export const getFinishReviewBody = ({itemIds, mistakesData}:{itemIds:ItemId[], mistakesData:MistakesData}):{reviewData: ({itemId:string, numMistakes:number})[]}=>{
  return {reviewData: itemIds.map(itemId=>({itemId, numMistakes: mistakesData[itemId]}))}
}