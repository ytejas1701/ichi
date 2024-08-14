<script lang="ts">
    import WidgetWrapper from '$lib/components/WidgetWrapper.svelte'
    import LabelWrapper from "$lib/components/LabelWrapper.svelte";
    import BigTextWrapper from '$lib/components/BigTextWrapper.svelte';

    export let meaning:string
</script>

<WidgetWrapper widthCells={4} heightCells={2}>
    <meaning-wrapper>
        <LabelWrapper text="meaning"/>
        <BigTextWrapper text={meaning}/>
    </meaning-wrapper>
</WidgetWrapper>

<style>
    meaning-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        overflow-x: hidden;
    }
</style>