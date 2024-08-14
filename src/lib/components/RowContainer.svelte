<row-container>
    <slot/>
</row-container>

<style>
    row-container{
        display: flex;
        flex-direction: row;
        gap: var(--GAP_SIZE);
        justify-content: center;
        align-items: center;
    }
</style>

