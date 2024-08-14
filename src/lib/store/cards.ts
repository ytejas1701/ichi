import { CardType, type Card } from "$lib/interfaces/card";
import { type Writable, writable } from "svelte/store";
import { AnimationState, type MistakesData } from "$lib/interfaces/card"
import type { ItemData, ItemId } from "$lib/interfaces/item";

export const cards:Writable<Card[]> = writable([])

export const itemData:Writable<{[itemId:ItemId]:ItemData}> = writable({})

export const index:Writable<number> = writable(0)

export const animationState:Writable<AnimationState> = writable(AnimationState.COLLAPSED)

export const isSessionDone:Writable<boolean> = writable(false)

export const mistakesData:Writable<MistakesData> = writable({})