<script lang="ts">
    export let text:string

    let height: number
    let width: number
    $:styleProps = `
        --TEXT_HEIGHT: ${Math.min(height, 2.4*width/text.length)}px;
    `
</script>

<big-text-wrapper style={styleProps} bind:clientHeight={height} bind:clientWidth={width}>
    {text}
</big-text-wrapper>

<style>
    big-text-wrapper{
        display: block;
        flex-grow: 1;
        font-size: calc(var(--TEXT_HEIGHT) / 1.6);
        line-height: var(--TEXT_HEIGHT);
        font-weight: bold;
    }
</style>