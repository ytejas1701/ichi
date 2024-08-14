import type { InputStatus, InputType } from "./general";
import type { ItemId } from "./item";

export enum CardType {
    "LEARN" = "learn",
    "REVISE" = "revise"
}

export interface Card {
    itemId: ItemId,
    cardType: CardType,
}

export enum AnimationState {
    "COLLAPSED" = "collpased",
    "UNCOLLAPSED" = "uncollpased",
    "ANSWERABLE" = "answerable",
    "MORPHING" = "morphing"
}

export interface MistakesData {
    [itemId: ItemId]: number
}
