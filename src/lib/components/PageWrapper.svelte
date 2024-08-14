<page-wrapper>
  <slot />
</page-wrapper>

<style>
  page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: fit-content;
    margin: auto;
  }
</style>
