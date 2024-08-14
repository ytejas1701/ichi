<script lang="ts">
  import LabelWrapper from "$lib/components/LabelWrapper.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";

  export let reading: string;
  export let secondary: string[];
</script>

<WidgetWrapper widthCells={3} heightCells={3}>
  <item-container>
    <item-wrapper>
      <LabelWrapper text={"reading"} />
      <big-text-wrapper>
        {reading}
      </big-text-wrapper>
    </item-wrapper>
    <item-wrapper>
      <LabelWrapper text={"secondary"} />
      <text-wrapper>
        {secondary.join(", ")}
      </text-wrapper>
    </item-wrapper>
  </item-container>
</WidgetWrapper>

<style>
  item-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  big-text-wrapper {
    display: block;
    font-size: 56px;
    line-height: 56px;
    color: var(--_TEXT_COLOR);
    font-weight: bold;
    margin-top: calc(var(--GAP_SIZE) * 1.5);
  }
  text-wrapper {
    display: block;
    font-size: 24px;
    line-height: 24px;
    color: var(--FADED_TEXT_COLOR);
    margin-top: var(--GAP_SIZE);
  }
</style>
