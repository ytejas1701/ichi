<script lang="ts">
  import BigTextWrapper from "$lib/components/BigTextWrapper.svelte";
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  import { getSizePropFromNumCells } from "$lib/utils/general";

  export let level: number;

  let styleProps:string = `
        --TEXT_HEIGHT: ${getSizePropFromNumCells(2)};
    `

</script>

<WidgetWrapper heightCells={3} widthCells={3}>
    <level-wrapper style={styleProps}>
        {level}
  </level-wrapper>
</WidgetWrapper>

<style>
    level-wrapper{
        display: block;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: var(--TEXT_HEIGHT);
        line-height: var(--TEXT_HEIGHT);
        text-align: center;
    }
</style>
