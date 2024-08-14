<script lang="ts">
    import WidgetWrapper from '$lib/components/WidgetWrapper.svelte'
    import LabelWrapper from "$lib/components/LabelWrapper.svelte";
    import BigTextWrapper from '$lib/components/BigTextWrapper.svelte';

    export let reading:string
</script>

<WidgetWrapper widthCells={4} heightCells={2}>
    <reading-wrapper>
        <LabelWrapper text="reading"/>
        <BigTextWrapper text={reading}/>
    </reading-wrapper>
</WidgetWrapper>

<style>
    reading-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        overflow-x: hidden;
    }
</style>