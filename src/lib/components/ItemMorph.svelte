<script lang="ts">  
  import { Direction } from "$lib/interfaces/general";
  import { ItemType, type MorphItem } from "$lib/interfaces/item";
  import { getSizeFromItemType, getSizePropFromNumCells, sleep } from "$lib/utils/general";
  import KanjiWrapper from "$lib/widgets/KanjiWrapper.svelte";
  import VocabWrapper from "$lib/widgets/VocabWrapper.svelte";
  import ColContainer from "./ColContainer.svelte";

    export let initialItem: MorphItem
    export let finalItem: MorphItem

    $: initialSize =  getSizeFromItemType(initialItem.type)
    $: finalSize =  getSizeFromItemType(finalItem.type)

    $: styleProps = `
        --INITIAL_WIDTH: ${getSizePropFromNumCells(initialSize.widthCells)};
        --INITIAL_HEIGHT: ${getSizePropFromNumCells(initialSize.heightCells)};
        --FINAL_WIDTH: ${getSizePropFromNumCells(finalSize.widthCells)};
        --FINAL_HEIGHT: ${getSizePropFromNumCells(finalSize.heightCells)};
    `
</script>

<ColContainer>
    <widget-wrapper style={styleProps}>
        <content-wrapper>
            <item-wrapper id="initial">
                {#if initialItem.type===ItemType.KANJI}
                    <KanjiWrapper isTransparent={true} kanji={initialItem.item}/>
                {:else}
                    <VocabWrapper isTransparent={true} vocab={initialItem.item}/>
                {/if}
            </item-wrapper>
            <item-wrapper id="final">
                {#if finalItem.type===ItemType.KANJI}
                    <KanjiWrapper isTransparent={true} kanji={finalItem.item}/>
                {:else}
                    <VocabWrapper isTransparent={true} vocab={finalItem.item}/>
                {/if}
            </item-wrapper>
        </content-wrapper>
    </widget-wrapper>
</ColContainer>

<style>
    @keyframes morphBox {
        from {
            width: var(--INITIAL_WIDTH);
            height: var(--INITIAL_HEIGHT);
        }
        to {
            width: var(--FINAL_WIDTH);
            height: var(--FINAL_HEIGHT);
        }
    }
    @keyframes morphInitial {
        from { translate: 0; }
        to { translate: calc(-1 * var(--INITIAL_WIDTH)); }
    }
    @keyframes morphFinal {
        from { translate: var(--INITIAL_WIDTH); }
        to { translate: 0; }
    }
    widget-wrapper{
        display: block;
        position: relative;
        background-color: var(--BACKGROUND_COLOR);
        border-radius: var(--CORNER_SIZE);
        box-shadow: var(--BOX_SHADOW);
        padding: var(--PADDING_SIZE);
        width: var(--FINAL_WIDTH);
        height: var(--FINAL_HEIGHT);
        animation: morphBox 600ms ease-in-out;
    }
    content-wrapper {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    item-wrapper{
        position: absolute;
        top: 50%;
        left: calc(-1 * var(--PADDING_SIZE));
        transform: translateY(-50%);
    }
    item-wrapper#initial{
        translate: calc(-1 * var(--INITIAL_WIDTH));
        animation: morphInitial 600ms ease-in-out;
    }
    item-wrapper#final{
        translate: 0;
        animation: morphFinal 600ms ease-in-out;
    }
</style>


