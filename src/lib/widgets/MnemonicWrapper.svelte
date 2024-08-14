<script lang="ts">
    import LabelWrapper from "$lib/components/LabelWrapper.svelte";
    import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
    import type { ItemId } from "$lib/interfaces/item";

    export let mnemonic:string
    export let itemId: ItemId

    let timeout:any

    const updateMnemonicHandler = async ()=>{
        try {
            await fetch("https://updatemnemonic-qpx7p74eea-uc.a.run.app", {
                method:"POST",
                body: JSON.stringify({itemId, mnemonic})
            })
        } catch (error:any) {
            console.error(error.message)
        }
    }

    const changeHandler = ()=>{
        clearTimeout(timeout)
        timeout = setTimeout(async ()=>{
        await updateMnemonicHandler()
    }, 1000)
    }
</script>

<WidgetWrapper widthCells={4} heightCells={4}>
    <mnemonic-wrapper>
        <LabelWrapper text="mnemonic"/>
        <textarea
            on:keyup={changeHandler}
            placeholder="Enter your mnemonic" 
            bind:value={mnemonic}/>
    </mnemonic-wrapper>
</WidgetWrapper>

<style>
    mnemonic-wrapper{
        display: flex;
        flex-direction: column;
        font-size: var(--MID_SIZE);
        height: 100%;
    }

    mnemonic-wrapper textarea{
        margin-top: var(--GAP_SIZE);
        flex-grow: 1;
    }
</style>