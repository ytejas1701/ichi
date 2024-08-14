<script lang="ts">
import LabelWrapper from "$lib/components/LabelWrapper.svelte";
import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";

    export let label:string
    export let count:number
</script>

<WidgetWrapper widthCells={2} heightCells={2}>
    <LabelWrapper text={label}/>
    <text-wrapper>{count}</text-wrapper>
</WidgetWrapper>

<style>
    text-wrapper{
        display: block;
        width: 100%;
        font-size: 64px;
        text-align: center;
    }
</style>