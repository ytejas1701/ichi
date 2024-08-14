<script lang="ts">
    import CardsContainer from "$lib/containers/CardsContainer.svelte";
    import { CardType } from "$lib/interfaces/card";
    import type { ItemData, ItemId } from "$lib/interfaces/item";
    import { cards, isSessionDone, itemData, mistakesData } from "$lib/store/cards"
    import { getFinishLessonBody } from "$lib/utils/general";
    import { getCardsFromItemIds,getInitialMistakesDataFromIds } from "$lib/utils/item.js";

    export let data : {itemIds: ItemId[], itemData:{[itemId:ItemId]:ItemData}}
    $cards = [
        ...getCardsFromItemIds({itemIds:data.itemIds, cardType:CardType.LEARN}),
        ...getCardsFromItemIds({itemIds:data.itemIds, cardType:CardType.REVISE}),
    ]
    $itemData = data.itemData
    $mistakesData = getInitialMistakesDataFromIds(data.itemIds)


    $isSessionDone = false

    const finishLessonHandler = async ()=>{
        try {
            await fetch("https://finishlesson-qpx7p74eea-uc.a.run.app", {
                method:"POST",
                body: JSON.stringify(getFinishLessonBody(data.itemIds))
            })
        } catch (error:any) {
            console.error(error.message)
        }
    }

    $: $isSessionDone && finishLessonHandler()
</script>

{#if $cards.length > 0}
    <CardsContainer/>
{/if}