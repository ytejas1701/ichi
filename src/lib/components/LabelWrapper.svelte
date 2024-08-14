<script lang="ts">
    export let text:string
</script>

<label-wrapper>
    {text}
</label-wrapper>

<style>
    label-wrapper{
        display: block;
        text-transform: uppercase;
        font-size: var(--MIN_SIZE);
        line-height: var(--MIN_SIZE);
    }
</style>