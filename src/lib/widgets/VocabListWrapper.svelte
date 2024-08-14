<script lang="ts">
  import LabelWrapper from "$lib/components/LabelWrapper.svelte";
import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";

    export let vocabList: string[]
</script>

<WidgetWrapper widthCells={4} heightCells={6}>
        <LabelWrapper text={"vocabulary"}/>
        <vocab-container>
            {#each vocabList as vocab}
                <vocab-wrapper>{vocab}</vocab-wrapper>
            {/each}
        </vocab-container>
</WidgetWrapper>

<style>
    vocab-container{
        display: flex;
        flex-direction: column;
        gap: var(--GAP_SIZE);
        overflow-y: scroll;
        height: calc(100% - var(--PADDING_SIZE));
        margin-top: var(--GAP_SIZE);
    }
    vocab-wrapper{
        font-size: 32px;
    }
</style>