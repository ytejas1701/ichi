<script lang="ts">
    import ColContainer from "$lib/components/ColContainer.svelte";
    import RowContainer from "$lib/components/RowContainer.svelte";
    import type { Item } from "$lib/interfaces/item";
    import { cards, index, animationState, itemData } from "$lib/store/cards";
    import { getItemFromId, isItemVocab } from "$lib/utils/item"
    import VocabWrapper from "$lib/widgets/VocabWrapper.svelte"
    import MeaningWrapper from "$lib/widgets/MeaningWrapper.svelte"
    import ReadingWrapper from "$lib/widgets/ReadingWrapper.svelte"
    import MnemonicWrapper from "$lib/widgets/MnemonicWrapper.svelte"
    import WidgetSlider from "$lib/components/WidgetSlider.svelte"
    import { AnimationState } from "$lib/interfaces/card";

    let vocab:Item
    $: vocab = getItemFromId($cards[$index].itemId) as Item
</script>

{#if isItemVocab(vocab)}
    <ColContainer>
        <WidgetSlider indexFromTop={0} yMove={{cells:2, gaps:1}} isCollapsed={$animationState===AnimationState.COLLAPSED}>
        <RowContainer>
            <VocabWrapper vocab={vocab.vocab}/>
        </RowContainer>
        </WidgetSlider>
        <WidgetSlider indexFromTop={1} yMove={{cells:-2, gaps:0}} isCollapsed={$animationState===AnimationState.COLLAPSED}>
        <RowContainer>
            <ColContainer>
                <MeaningWrapper meaning={vocab.meaning}/>
                <ReadingWrapper reading={vocab.reading}/>
            </ColContainer>
            <ColContainer>
                <MnemonicWrapper mnemonic={$itemData[vocab.id].mnemonic} itemId={vocab.id}/>
            </ColContainer>
        </RowContainer>
        </WidgetSlider>
    </ColContainer>
{/if}