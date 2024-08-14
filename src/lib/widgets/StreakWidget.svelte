<script lang="ts">
  import BigTextWrapper from "$lib/components/BigTextWrapper.svelte";
import LabelWrapper from "$lib/components/LabelWrapper.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";

  export let streak:number
</script>

<WidgetWrapper widthCells={4} heightCells={2}>
    <streak-widget>
  <icon-container>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="bi bi-fire"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"
      />
    </svg>
  </icon-container>

  <text-container>
    <LabelWrapper text={"STREAK"} />
    <BigTextWrapper text={`${streak}`}/>
  </text-container>
</streak-widget>
</WidgetWrapper>

<style>
    streak-widget{
        display: grid;
        grid-template-columns: 33% 1fr;
        flex-direction: row;
        gap: var(--GAP_SIZE);
        height: 100%;
    }
  icon-container {
    display: flex;
    align-items: center;
    height: 100%;
  }
  svg {
    width: 100%;
    height: 100%;
    fill: var(--PRIMARY_COLOR);
  }
  text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 100%;
  }
</style>
