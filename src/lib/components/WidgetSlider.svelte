<script lang="ts">
  export let xMove: {cells:number, gaps:number} = {cells:0, gaps: 0};
  export let yMove: {cells:number, gaps:number} = {cells:0, gaps: 0};
  export let indexFromTop: number;
  export let isCollapsed: boolean = false;

  const getTranslateProps = (move: {cells:number, gaps:number}): string => {
    return `calc(var(--CELL_SIZE) * ${move.cells} + var(--GAP_SIZE) * ${move.gaps + move.cells - (move.gaps===0 && move.cells===0 ? 0 : 1)})`;
  };

  let styleProps: string = `
    --TRANSLATE: translate(${getTranslateProps(xMove)}, ${getTranslateProps(yMove)});
    z-index: ${8-indexFromTop};
    --COLLPASED_OPACITY: ${indexFromTop===0?"1":"0"};`;
</script>

<slider-wrapper class={isCollapsed ? "collapsed" : ""} style={styleProps}>
  <slot />
</slider-wrapper>

<style>
  slider-wrapper {
    display: block;
    transition: all 600ms;
  }
  slider-wrapper.collapsed {
    opacity: var(--COLLPASED_OPACITY);
    transform: var(--TRANSLATE);
  }
</style>
