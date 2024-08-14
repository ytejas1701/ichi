<script lang="ts">
  import ColContainer from "$lib/components/ColContainer.svelte";
  import RowContainer from "$lib/components/RowContainer.svelte";
  import type { Item } from "$lib/interfaces/item";
  import { cards, index, animationState, itemData } from "$lib/store/cards";
  import { getItemFromId, isItemKanji } from "$lib/utils/item";
  import KanjiWrapper from "$lib/widgets/KanjiWrapper.svelte";
  import MeaningWrapper from "$lib/widgets/MeaningWrapper.svelte";
  import ReadingWrapper from "$lib/widgets/ReadingWrapper.svelte";
  import MnemonicWrapper from "$lib/widgets/MnemonicWrapper.svelte";
  import InputWrapper from "$lib/widgets/InputWrapper.svelte";
  import AllReadingsWrapper from "$lib/widgets/AllReadingsWrapper.svelte";
  import LevelWrapper from "$lib/widgets/LevelWrapper.svelte";
  import WidgetSlider from "$lib/components/WidgetSlider.svelte";
  import { AnimationState } from "$lib/interfaces/card";

  let kanji: Item;
  $: kanji = getItemFromId($cards[$index].itemId) as Item;
</script>

{#if isItemKanji(kanji)}
  <RowContainer>
    <WidgetSlider
      xMove={{ cells: 3.5, gaps: 1 }}
      indexFromTop={0}
      isCollapsed={$animationState === AnimationState.COLLAPSED ||
        $animationState === AnimationState.ANSWERABLE}
    >
      <ColContainer>
        <WidgetSlider
          yMove={{ cells: 1, gaps: 1 }}
          indexFromTop={0}
          isCollapsed={$animationState === AnimationState.COLLAPSED}
        >
          <KanjiWrapper kanji={kanji.kanji} />
        </WidgetSlider>
        <WidgetSlider
          yMove={{ cells: -1, gaps: -1 }}
          indexFromTop={1}
          isCollapsed={$animationState === AnimationState.COLLAPSED}
        >
          <InputWrapper/>
        </WidgetSlider>
      </ColContainer>
    </WidgetSlider>
    <WidgetSlider
      xMove={{ cells: -0.5, gaps: 1 }}
      indexFromTop={1}
      isCollapsed={$animationState === AnimationState.COLLAPSED ||
        $animationState === AnimationState.ANSWERABLE}
    >
      <ColContainer>
        <MeaningWrapper meaning={kanji.meaning} />
        <MnemonicWrapper mnemonic={$itemData[kanji.id].mnemonic} itemId={kanji.id}/>
      </ColContainer>
    </WidgetSlider>
    <WidgetSlider
      xMove={{ cells: -4, gaps: -0 }}
      indexFromTop={2}
      isCollapsed={$animationState === AnimationState.COLLAPSED ||
        $animationState === AnimationState.ANSWERABLE}
    >
      <ColContainer>
        <AllReadingsWrapper
          reading={kanji.reading}
          secondary={kanji.secondaryReadings}
        />
        <LevelWrapper level={$itemData[kanji.id].stage} />
      </ColContainer>
    </WidgetSlider>
  </RowContainer>
{/if}
