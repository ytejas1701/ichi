export type KanjiId = `k_${number}`
export type VocabId = `v_${number}`
export type ItemId = KanjiId | VocabId

export enum ItemType {
    "KANJI" = "kanji",
    "VOCAB" = "vocab"
}

export interface Kanji {
    id: KanjiId,
    kanji: string,
    meaning: string,
    reading: string,
    secondaryReadings: string[]
}

export interface Vocab {
    id: VocabId,
    vocab: string,
    meaning: string,
    reading: string,
    composition: KanjiId[],
    examples: VocabExample[]
}

export interface VocabExample {
    japanese: string;
    english: string;
}

export type Item = Kanji | Vocab

export interface ItemMetaData {
    mnemonic: string,
    stage: number
}

export interface MorphItem {
    item: string,
    type: ItemType
}

export enum LearnStoreState{
    "COLLAPSED" = "collapsed",
    "UNCOLLAPSED" = "uncollapsed",
    "SWIPING" = "swiping"
}

export interface LearnStore {
    currentIndex: number,
    state: LearnStoreState,
    itemIds: ItemId[]
}

export interface ItemData {
    stage: number,
    mnemonic: string,
    isPassed: boolean,
    dueDate: Date
}