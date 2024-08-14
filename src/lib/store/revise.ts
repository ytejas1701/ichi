import { InputStatus, InputType } from "$lib/interfaces/general";
import { writable, type Writable } from "svelte/store";

export let currentInputType:Writable<InputType> = writable(InputType.MEANING)

export let inputStatus:Writable<{[inputType in InputType]:InputStatus}> = writable({
    [InputType.MEANING]: InputStatus.UNCHECKED,
    [InputType.READING]: InputStatus.UNCHECKED
})

export let correctAnswers:Writable<{[inputType in InputType]:string}> = writable({
    [InputType.MEANING]: "",
    [InputType.READING]: ""
})

export let resetState = ({meaning, reading}:{meaning:string, reading:string})=>{
    currentInputType.set(InputType.MEANING)
    inputStatus.set({
        [InputType.MEANING]: InputStatus.UNCHECKED,
        [InputType.READING]: InputStatus.UNCHECKED
    })
    correctAnswers.set({
        [InputType.MEANING]: meaning,
        [InputType.READING]: reading
    })
}