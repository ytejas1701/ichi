import { CardType, type Card, type MistakesData } from "$lib/interfaces/card";
import { ItemType } from "$lib/interfaces/item";
import type {Item, ItemId, Kanji, Vocab } from "$lib/interfaces/item"
import kanjiCorpus from "../../kanji_corpus.json";
import vocabCorpus from "../../vocab_corpus.json";

export const getItemTypeFromId = (itemId: ItemId): ItemType | null => {
  if (itemId[0] === "k") return ItemType.KANJI;
  if (itemId[0] === "v") return ItemType.VOCAB;
  return null;
};

export const getItemFromId = (itemId: ItemId): Item | null => {
  const itemType = getItemTypeFromId(itemId);
  if (itemType === ItemType.KANJI)
    return { id: itemId, ...(kanjiCorpus as any)[itemId] };
  if (itemType === ItemType.VOCAB)
    return { id: itemId, ...(vocabCorpus as any)[itemId] };
  return null;
};

export const isItemKanji = (item:Item):item is Kanji=>{
    return item.id[0]==='k'
}

export const isItemVocab = (item:Item):item is Vocab=>{
    return item.id[0]==='v'
}

export const getCardsFromItemIds = ({itemIds, cardType}:{itemIds:ItemId[], cardType: CardType}):Card[]=>{
  return itemIds.map(itemId=>({
    itemId, 
    cardType
  }))
}

export const getInitialMistakesDataFromIds = (itemIds: ItemId[]): MistakesData=>{
  let mistakesData: MistakesData = {}
  for(let itemId of itemIds){
    mistakesData[itemId] = 0
  }
  return mistakesData
}