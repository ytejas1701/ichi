<script lang="ts">
  import ColContainer from "$lib/components/ColContainer.svelte";
  import RowContainer from "$lib/components/RowContainer.svelte";
  import type { Item } from "$lib/interfaces/item";
  import { cards, index, animationState, itemData } from "$lib/store/cards";
  import { AnimationState } from "$lib/interfaces/card";
  import { getItemFromId, isItemVocab } from "$lib/utils/item";
  import { getCompositionKanjis } from "$lib/utils/general";
  import VocabWrapper from "$lib/widgets/VocabWrapper.svelte";
  import MeaningWrapper from "$lib/widgets/MeaningWrapper.svelte";
  import ReadingWrapper from "$lib/widgets/ReadingWrapper.svelte";
  import MnemonicWrapper from "$lib/widgets/MnemonicWrapper.svelte";
  import InputWrapper from "$lib/widgets/InputWrapper.svelte";
  import LevelWrapper from "$lib/widgets/LevelWrapper.svelte";
  import KanjiCompositionWrapper from "$lib/widgets/KanjiCompositionWrapper.svelte";
  import WidgetSlider from "$lib/components/WidgetSlider.svelte";

  let vocab: Item;
  $: vocab = getItemFromId($cards[$index].itemId) as Item;
</script>

{#if isItemVocab(vocab)}
  <RowContainer>
    <ColContainer>
      <WidgetSlider
        xMove={{ cells: 3.5, gaps: 1 }}
        isCollapsed={$animationState === AnimationState.COLLAPSED ||
          $animationState === AnimationState.ANSWERABLE}
        indexFromTop={0}
      >
        <WidgetSlider
          yMove={{ cells: 1, gaps: 1 }}
          indexFromTop={0}
          isCollapsed={$animationState === AnimationState.COLLAPSED}
        >
          <VocabWrapper vocab={vocab.vocab} />
        </WidgetSlider>
      </WidgetSlider>
      <RowContainer>
        <WidgetSlider
          yMove={{ cells: -1, gaps: -1 }}
          indexFromTop={1}
          isCollapsed={$animationState === AnimationState.COLLAPSED}
        >
          <WidgetSlider
            xMove={{ cells: 5.5, gaps: 1 }}
            isCollapsed={$animationState === AnimationState.COLLAPSED ||
              $animationState === AnimationState.ANSWERABLE}
            indexFromTop={0}
          >
            <InputWrapper />
          </WidgetSlider>
        </WidgetSlider>
        <WidgetSlider
          xMove={{ cells: 3.5, gaps: 1 }}
          isCollapsed={$animationState === AnimationState.COLLAPSED ||
            $animationState === AnimationState.ANSWERABLE}
          indexFromTop={1}
        >
          <ReadingWrapper reading={vocab.reading} />
        </WidgetSlider>
      </RowContainer>
    </ColContainer>
    <WidgetSlider
      xMove={{ cells: -2.5, gaps: -1 }}
      isCollapsed={$animationState === AnimationState.COLLAPSED ||
        $animationState === AnimationState.ANSWERABLE}
      indexFromTop={2}
    >
      <ColContainer>
        <MnemonicWrapper mnemonic={$itemData[vocab.id].mnemonic} itemId={vocab.id}/>
        <MeaningWrapper meaning={vocab.meaning} />
      </ColContainer>
    </WidgetSlider>
    <WidgetSlider
      xMove={{ cells: -6, gaps: -1 }}
      isCollapsed={$animationState === AnimationState.COLLAPSED ||
        $animationState === AnimationState.ANSWERABLE}
      indexFromTop={3}
    >
      <ColContainer>
        <KanjiCompositionWrapper kanjis={getCompositionKanjis(vocab)} />
        <LevelWrapper level={$itemData[vocab.id].stage} />
      </ColContainer>
    </WidgetSlider>
  </RowContainer>
{/if}
