<script lang="ts">
    import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
    import { getSizePropFromNumCells } from "$lib/utils/general";
    import BigVocab from "$lib/components/BigVocab.svelte"
    
    export let vocab:string
    export let isTransparent:boolean = false

    let styleProps:string = `
    --TEXT_HEIGHT: ${getSizePropFromNumCells(2)};
    `
</script>

<WidgetWrapper {isTransparent} widthCells={8} heightCells={4}>
    <text-wrapper style={styleProps}>
        <BigVocab {vocab}/>
    </text-wrapper>
</WidgetWrapper>

<style>
    text-wrapper{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>