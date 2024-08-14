<script lang="ts">
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  import { getSizePropFromNumCells } from "$lib/utils/general";
  import BigKanji from "$lib/components/BigKanji.svelte";

  export let kanji: string;
  export let size: number = 4;
  export let isTransparent: boolean = false

  let styleProps: string = `
        --TEXT_HEIGHT: ${getSizePropFromNumCells(size - 1.5)};
    `;
</script>

<WidgetWrapper {isTransparent} widthCells={size} heightCells={size}>
  <content-wrapper>
    <item-wrapper style={styleProps}>
      <BigKanji {kanji} />
    </item-wrapper>
  </content-wrapper>
</WidgetWrapper>

<style>
  content-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  item-wrapper {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
