<script lang="ts">
  import StageScroller from "$lib/components/StageScroller.svelte";
    export let currentStage:number
    export let numStages:number
</script>


<top-bar>
    <StageScroller {currentStage} {numStages}/>
</top-bar>

<style>
    top-bar{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: calc(var(--CELL_SIZE) / 2);
    }
</style>