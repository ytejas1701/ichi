<script lang="ts">
    import ColContainer from "$lib/components/ColContainer.svelte";
    import RowContainer from "$lib/components/RowContainer.svelte";
    import type { Item } from "$lib/interfaces/item";
    import { cards, index, itemData, animationState } from "$lib/store/cards";
    import { getItemFromId, isItemKanji } from "$lib/utils/item"
    import KanjiWrapper from "$lib/widgets/KanjiWrapper.svelte"
    import MeaningWrapper from "$lib/widgets/MeaningWrapper.svelte"
    import ReadingWrapper from "$lib/widgets/ReadingWrapper.svelte"
    import MnemonicWrapper from "$lib/widgets/MnemonicWrapper.svelte"
    import WidgetSlider from "$lib/components/WidgetSlider.svelte"
    import { AnimationState } from "$lib/interfaces/card";

    let kanji:Item
    $: kanji = getItemFromId($cards[$index].itemId) as Item
</script>

{#if isItemKanji(kanji)}
    <RowContainer>
        <WidgetSlider indexFromTop={0} xMove={{cells:4, gaps:1}} isCollapsed={$animationState===AnimationState.COLLAPSED}>
        <ColContainer>
            <KanjiWrapper kanji={kanji.kanji}/>
        </ColContainer>
        </WidgetSlider>
        <WidgetSlider indexFromTop={1} isCollapsed={$animationState===AnimationState.COLLAPSED}>
        <ColContainer>
            <MeaningWrapper meaning={kanji.meaning}/>
            <ReadingWrapper reading={kanji.reading}/>
        </ColContainer>
        </WidgetSlider>
        <WidgetSlider indexFromTop={2} xMove={{cells:-4, gaps:-1}} isCollapsed={$animationState===AnimationState.COLLAPSED}>
        <ColContainer>
            <MnemonicWrapper mnemonic={$itemData[kanji.id].mnemonic} itemId={kanji.id}/>
        </ColContainer>
        </WidgetSlider>
    </RowContainer>
{/if}