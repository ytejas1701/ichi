<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import { cards, index, animationState, isSessionDone } from "../store/cards";
    import { AnimationState, CardType, type Card } from "$lib/interfaces/card";
    import { getItemFromId, getItemTypeFromId } from "$lib/utils/item"
    import { ItemType, type Item } from "$lib/interfaces/item";
    import KanjiLearnContainer from "./KanjiLearnContainer.svelte";
    import VocabLearnContainer from "./VocabLearnContainer.svelte";
    import { getFinishLessonBody, getMorphItemFromItem, sleep } from "$lib/utils/general";
    import { onMount } from "svelte";
    import ItemMorph from "$lib/components/ItemMorph.svelte";
    import KanjiReviseContainer from "./KanjiReviseContainer.svelte";
    import VocabReviseContainer from "./VocabReviseContainer.svelte";
    import { resetState } from "$lib/store/revise";
    import LearnSummaryWidget from "$lib/widgets/LearnWidget.svelte";
    
    let currentCard:Card
    $: currentCard = $cards[$index]
    let currentItem: Item
    let nextItem: Item
    $: currentItem = getItemFromId($cards[$index].itemId) as Item
    $: nextItem = getItemFromId($cards[($index + 1) % $cards.length].itemId) as Item

    const incrementIndex = async ()=>{
        $animationState = AnimationState.COLLAPSED
        await sleep(800)
        $animationState = AnimationState.MORPHING
        await sleep(800)
        $index = $index + 1
    }
    
    const initializeCard = async ()=>{
        $animationState = AnimationState.COLLAPSED
        if(currentCard.cardType===CardType.REVISE){
            let item = getItemFromId($cards[$index].itemId)
            resetState({meaning:(item as Item).meaning, reading:(item as Item).reading})
        }
        await sleep(200)
        if(currentCard.cardType===CardType.LEARN) $animationState = AnimationState.UNCOLLAPSED
        if(currentCard.cardType===CardType.REVISE) $animationState = AnimationState.ANSWERABLE
    }

    const actionHandler = async ()=>{
        if($index === $cards.length-1) return $isSessionDone = true
        await incrementIndex()
        await initializeCard()
    }

    onMount(async ()=>{
        await initializeCard()
        document.addEventListener("keydown", async (event:KeyboardEvent)=>{
            if($animationState!==AnimationState.UNCOLLAPSED)return
            if(event.key==="Enter" || event.key==="ArrowRight") await actionHandler()
        })
    })
</script>

<card-container>
    {#if $isSessionDone}
        <LearnSummaryWidget/>
    {:else}
        {#if $animationState === AnimationState.MORPHING}
            <ItemMorph initialItem={getMorphItemFromItem(currentItem)} finalItem={getMorphItemFromItem(nextItem)}/>
        {:else if currentCard.cardType===CardType.LEARN}
            {#if getItemTypeFromId(currentCard.itemId) === ItemType.KANJI}
                <KanjiLearnContainer/>
            {:else if getItemTypeFromId(currentCard.itemId) === ItemType.VOCAB}
                <VocabLearnContainer/>
            {/if}
        {:else if currentCard.cardType===CardType.REVISE}
            {#if getItemTypeFromId(currentCard.itemId) === ItemType.KANJI}
                <KanjiReviseContainer/>
            {:else if getItemTypeFromId(currentCard.itemId) === ItemType.VOCAB}
                <VocabReviseContainer/>
            {/if}
        {/if}
    {/if}
    <Button clickHandler={actionHandler} isClickable={$animationState === AnimationState.UNCOLLAPSED}/>
</card-container>

<style>
    card-container{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: fit-content;
        margin: auto;
    }
</style>