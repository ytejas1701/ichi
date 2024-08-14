<script lang="ts">
</script>

<side-bar data-sveltekit-reload>
  <a class='icon-wrapper' href="/learn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
      />
    </svg>
    <text-wrapper>LEARN</text-wrapper>
  </a>
  <a class='icon-wrapper' href="/revise">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="bi bi-arrow-repeat"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"
      />
      <path
        fill-rule="evenodd"
        d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
      />
    </svg>
    <text-wrapper>REVISE</text-wrapper>
  </a>
</side-bar>

<style>
  side-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
  .icon-wrapper{
    cursor: pointer;
    border-radius: var(--CORNER_SIZE);
    margin: calc(var(--GAP_SIZE)/2);
    padding: var(--GAP_SIZE);
    transition: all 200ms;
    display: flex;
    align-items: center;
    gap: var(--GAP_SIZE);
    width: fit-content;
  }
  .icon-wrapper text-wrapper{
    display: block;
    width: 0;
    opacity: 0;
    color: var(--BACKGROUND_COLOR);
    transition: all 200ms;
    font-weight: bold;
  }
  .icon-wrapper:hover text-wrapper{
    width: calc(var(--CELL_SIZE)) ;
    opacity: 1;
  }
  svg {
    height: calc(var(--CELL_SIZE) / 2);
    width: calc(var(--CELL_SIZE) / 2);
    fill: var(--FADED_TEXT_COLOR);
    transition: all 200ms;
  }
  .icon-wrapper:hover {
    background-color: var(--TEXT_COLOR);
  }
  .icon-wrapper:hover svg {
    fill: var(--BACKGROUND_COLOR);
  }
</style>
