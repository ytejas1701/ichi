<script lang="ts">
  import { getSizePropFromNumCells } from "$lib/utils/general";

    export let vocab: string

    let styleProps:string = `
    --TEXT_HEIGHT: ${getSizePropFromNumCells(2)};
    `
</script>

<vocab-wrapper style={styleProps}>
    {vocab}
</vocab-wrapper>

<style>
    vocab-wrapper{
        display: block;
        font-size: var(--TEXT_HEIGHT);
        line-height: var(--TEXT_HEIGHT);
        text-align: center;
    }
</style>