<script lang="ts">
    import CardsContainer from "$lib/containers/CardsContainer.svelte";
    import { CardType } from "$lib/interfaces/card";
    import type { ItemData, ItemId } from "$lib/interfaces/item";
    import { cards, itemData, isSessionDone, mistakesData } from "$lib/store/cards"
  import { getFinishReviewBody } from "$lib/utils/general";
    import { getCardsFromItemIds, getInitialMistakesDataFromIds } from "$lib/utils/item";

    export let data : {itemIds: ItemId[], itemData:{[itemId:ItemId]:ItemData}}
    $cards = [
        ...getCardsFromItemIds({itemIds:data.itemIds, cardType:CardType.REVISE}),
    ]
    $itemData = data.itemData
    $mistakesData = getInitialMistakesDataFromIds(data.itemIds)

    $isSessionDone = false

    const finishReviewHandler = async ()=>{
        try {
            await fetch("https://finishreview-qpx7p74eea-uc.a.run.app", {
                method:"POST",
                body: JSON.stringify(getFinishReviewBody({itemIds: data.itemIds, mistakesData:$mistakesData}))
            })
        } catch (error:any) {
            console.error(error.message)
        }
    }

    $: $isSessionDone && finishReviewHandler()
</script>

{#if $cards.length > 0}
    <CardsContainer/>
{/if}