<script lang="ts">
  import LabelWrapper from "$lib/components/LabelWrapper.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  import type { VocabExample } from "$lib/interfaces/item";

  export let examples: VocabExample[];
</script>

<WidgetWrapper widthCells={6} heightCells={5}>
  <example-wrapper>
    <LabelWrapper text={"examples"} />
    {#each examples as example}
    <text-wrapper>
        {example.japanese}
        <br/>
        {example.english}
    </text-wrapper>
    <text-wrapper>
        {example.japanese}
        <br/>
        {example.english}
    </text-wrapper>
    {/each}
  </example-wrapper>
</WidgetWrapper>

<style>
  example-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: var(--GAP_SIZE);
    overflow-y: scroll;
  }
  text-wrapper {
    display: block;
    font-size: var(--MID_SIZE);
  }
</style>
