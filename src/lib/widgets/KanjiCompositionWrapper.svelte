<script lang="ts">
  import StageScroller from "$lib/components/StageScroller.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  import {getSizePropFromNumCells} from "$lib/utils/general"
  
  export let kanjis: string[];

  let currentIndex: number = 0;
</script>

<WidgetWrapper widthCells={3} heightCells={3}>
  <kanji-composition-wrapper>
    <kanji-container style={`width:${kanjis.length*100}%;transform:translateX(${-currentIndex*100/kanjis.length}%)`}>
        {#each kanjis as kanji, index}
        <kanji-wrapper class={index===currentIndex?"":"hidden"} style={`--TEXT_HEIGHT:${getSizePropFromNumCells(1.5)}`}>
            {kanji}
        </kanji-wrapper>
        {/each}
    </kanji-container>
    <StageScroller bind:currentStage={currentIndex} numStages={kanjis.length} />
  </kanji-composition-wrapper>
</WidgetWrapper>

<style>
    kanji-composition-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: var(--GAP_SIZE);
        overflow-x: hidden;
    }
    kanji-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-start;
        flex-grow: 1;
        transition: all 400ms;
    }
    kanji-wrapper{
        font-size: var(--TEXT_HEIGHT);
        line-height: var(--TEXT_HEIGHT);
        text-align: center;
        flex-grow: 1;
        transition: all 400ms;
    }
    kanji-wrapper.hidden{
        opacity: 0;
    }
</style>
