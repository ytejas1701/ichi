<script lang="ts">
    import style from '$lib/config/style'
    import SideBar from '$lib/widgets/SideBar.svelte';

    let styleProps : string = ''
    Object.entries(style)
    .forEach(([propName, propValue])=>{
        styleProps += `--${propName}:${propValue};`
    })
</script>

<body-wrapper style={styleProps}>
    <slot/>
    <SideBar/>
</body-wrapper>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</svelte:head>

<style>
    :global(body){
        margin: 0;
    }

    :global(*){
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
        color: var(--TEXT_COLOR);
    }

    :global(svg *){
        color: none;
    }

    body-wrapper{
        display: block;
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: var(--BODY_COLOR);
    }

    :global(input, textarea){
        width: 100%;
        height: 100%;
        resize: none;
        background-color: transparent;
        border: none;
        font-size: inherit;
    }
    :global(input:focus, textarea:focus){
        border: none;
        outline: none;
        font-size: inherit;
    }
    :global(input:placeholder, textarea::placeholder){
        color: var(--FADED_TEXT_COLOR);
    }

</style>