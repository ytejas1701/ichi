<script lang="ts">
  import { getSizePropFromNumCells } from "$lib/utils/general";

    export let kanji: string

    let styleProps:string = `
        --TEXT_HEIGHT: ${getSizePropFromNumCells(2.5)};
    `
</script>

<kanji-wrapper style={styleProps}>
    {kanji}
</kanji-wrapper>

<style>
    kanji-wrapper{
        display: block;
        font-size: var(--TEXT_HEIGHT);
        line-height: var(--TEXT_HEIGHT);
        text-align: center;
    }
</style>
