<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import StageScroller from "$lib/components/StageScroller.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  import { InputStatus, InputType } from "$lib/interfaces/general";
  import { sleep } from "$lib/utils/general";
  import { currentInputType } from "$lib/store/revise"

</script>

<WidgetWrapper widthCells={4} heightCells={2}>
  <input-wrapper>
    <input-container style={`transform: translate(${-$currentInputType * 50}%);`}>
      <Input
        inputType={InputType.MEANING}
      />
      <Input
        inputType={InputType.READING}
      />
    </input-container>
    <StageScroller numStages={2} bind:currentStage={$currentInputType} />
  </input-wrapper>
</WidgetWrapper>

<style>
  input-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;
    width: 200%;
    align-items: center;
    transition: all 400ms;
    align-self: flex-start;
  }
  input-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    gap: var(--GAP_SIZE);
    overflow-x: hidden;
  }
</style>
