<script lang="ts">
    import { getSizePropFromNumCells } from "$lib/utils/general";

    export let widthCells: number
    export let heightCells: number
    export let isTransparent: boolean = false
    export let isWhite: boolean = false

    $: styleProps = `
        width: ${getSizePropFromNumCells(widthCells)};
        height: ${getSizePropFromNumCells(heightCells)};
    `
</script>

<widget-wrapper data-transparent={isTransparent} data-white={isWhite} style={styleProps}>
    <slot/>
</widget-wrapper>

<style>
    widget-wrapper{
        display: block;
        position: relative;
        background-color: var(--BACKGROUND_COLOR);
        border-radius: var(--CORNER_SIZE);
        box-shadow: var(--BOX_SHADOW);
        padding: var(--PADDING_SIZE);
    }
    widget-wrapper[data-transparent = "true"]{
        background-color: transparent;
        box-shadow: none;
    }
    widget-wrapper[data-white = "true"]{
        background-color: var(--TEXT_COLOR);
    }
</style>