<script lang="ts">
    
    export let clickHandler: Function
    export let isClickable:boolean = true
    
    const click = async ()=>{
        clickHandler()
    }
    
    $:styleProps = `--WIDTH: calc(var(--CELL_SIZE) / 2);`
</script>

<button-wrapper data-hidden={!isClickable} style={styleProps}>
    <button on:click={click}/>
</button-wrapper>

<style>
    button-wrapper{
        width: calc(var(--CELL_SIZE) / 2);
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: calc(var(--CELL_SIZE) / 2);
        left: 50%;
        transform: translate(-50%, 0%);
    }
    button{
        display: block;
        width: var(--WIDTH);
        aspect-ratio: 1;
        border-radius: 100%;
        border: none;
        outline: none;
        background-color: var(--PRIMARY_COLOR);
        cursor: pointer;
        padding: 0;
        margin: 0;
        transition: all 400ms;
        box-shadow: 
            rgba(255, 99, 62, 0.10) 0 4px 14px 4px,
            rgba(255, 99, 62, 0.10) 0 -4px 14px 4px,
            rgba(255, 99, 62, 0.10) 4px 0 14px 4px,
            rgba(255, 99, 62, 0.10) -4px 0 14px 4px;
    }
    button:focus{
        border: none;
        outline: none;        
    }
    button-wrapper[data-hidden="true"] button {
        width: 0;
        box-shadow: none;
    }
</style>