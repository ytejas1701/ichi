<script lang="ts">
  import { InputStatus, InputType } from "$lib/interfaces/general";
  import { sleep } from "$lib/utils/general";
  import { icons } from "$lib/utils/icons";
  import { toHiragana, isHiragana, toRomaji } from "wanakana";
  import { getPlaceholderFromInputType } from "$lib/utils/general"
  import { correctAnswers, currentInputType, inputStatus } from "$lib/store/revise";
  import { animationState, cards, index, mistakesData } from "$lib/store/cards";
  import { AnimationState } from "$lib/interfaces/card";

  export let inputType: InputType

  let entry: string;
  let inputElement: HTMLElement;
  let isShake: boolean

  const focusElement = async ()=>{
    await sleep(400)
    if(inputElement)inputElement.focus()
  }

  const shake = async ()=>{
    isShake = true
    await sleep(200)
    isShake = false
  }

  const checkAnswer = async ()=>{
    $inputStatus[inputType] = $correctAnswers[inputType] === entry ? InputStatus.CORRECT : InputStatus.INCORRECT
    await sleep(800)

    if($inputStatus[InputType.MEANING]===InputStatus.UNCHECKED) return $currentInputType = InputType.MEANING
    if($inputStatus[InputType.READING]===InputStatus.UNCHECKED) return $currentInputType = InputType.READING
    
    if($inputStatus[InputType.MEANING]===InputStatus.INCORRECT || $inputStatus[InputType.READING]===InputStatus.INCORRECT){
      $cards = [...$cards, {...$cards[$index]}]
      const itemId = $cards[$index].itemId
      $mistakesData = {
        ...$mistakesData,
        [itemId]: $mistakesData[itemId] + 1
      }
    }
    $animationState = AnimationState.UNCOLLAPSED
  }

  const keyHandler = async (event:KeyboardEvent)=>{
    if(event.key==="Enter"){
      if(!entry) return await shake()
      if(inputType===InputType.READING && !isHiragana(entry)) return await shake()
      return await checkAnswer()
    }
    if(inputType===InputType.READING){
      entry = toHiragana(toRomaji(entry))
    }
  }

  $: if($currentInputType===inputType) focusElement()
</script>

<input-wrapper class={isShake?"shake":""}>
  <input
    on:keyup={keyHandler}
    bind:value={entry}
    placeholder={getPlaceholderFromInputType(inputType)}
    bind:this={inputElement}
    disabled={$inputStatus[inputType] !== InputStatus.UNCHECKED}
  />
  {#if $inputStatus[inputType] === InputStatus.CORRECT}
    {@html icons.correct}
  {:else if $inputStatus[inputType] === InputStatus.INCORRECT}
    {@html icons.incorrect}
  {/if}
</input-wrapper>

<style>
    @keyframes shake{
        from{translate: -5px;}
        to{translate: 5px;}
    }
    input-wrapper {
        display: block;
        position: relative;
    }
    input-wrapper.shake{
      animation: shake 100ms ease-in-out 2;

  }
  input {
    height: fit-content;
    text-align: center;
    font-size: 32px;
    display: block;
    width: 100%;
  }
  :global(input-wrapper svg) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
    width: calc(var(--CELL_SIZE) / 2);
    height: calc(var(--CELL_SIZE) / 2);
  }
</style>
