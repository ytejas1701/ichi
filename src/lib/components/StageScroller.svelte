<script lang="ts">
    export let numStages:number
    export let currentStage:number
</script>

<stage-scroller>
    {#each Array(numStages) as _,index}
        <stage-pill on:click={()=>currentStage=index} class={index===currentStage?"selected":""}/>
    {/each}
</stage-scroller>

<style>
    stage-scroller{
        display: flex;
        flex-direction: row;
        gap: calc(var(--GAP_SIZE) / 2);
    }
    stage-pill{
        display: block;
        height: calc(var(--GAP_SIZE) / 2);
        width: calc(var(--CELL_SIZE) / 2);
        background-color: var(--FADED_TEXT_COLOR);
        border-radius: var(--GAP_SIZE);
        cursor: pointer;
        transition: all 400ms;
    }
    stage-pill.selected {
        width: calc(var(--CELL_SIZE));
        background-color: var(--TEXT_COLOR);
    }
    stage-pill:not(.scelected):hover{
        background-color: var(--TEXT_COLOR);
    }
</style>