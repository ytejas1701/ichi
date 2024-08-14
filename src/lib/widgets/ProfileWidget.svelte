<script lang="ts">
  import WidgetWrapper from "$lib/components/WidgetWrapper.svelte";
  
  export let username:string
    export let dateJoined:string
    export let daysActive:number
    export let rank:number

</script>

<WidgetWrapper widthCells={4} heightCells={4}>
  <photo-wrapper />
  <text-wrapper>{username}</text-wrapper>
  <field-container>
    <field-wrapper>
      <label-wrapper>JOINED ON</label-wrapper>
      <entry-wrapper>{dateJoined}</entry-wrapper>
    </field-wrapper>
    <field-wrapper>
      <label-wrapper>DAYS ACTIVE</label-wrapper>
      <entry-wrapper>{daysActive}</entry-wrapper>
    </field-wrapper>
    <field-wrapper>
      <label-wrapper>RANK</label-wrapper>
      <entry-wrapper>{rank}</entry-wrapper>
    </field-wrapper>
  </field-container>
</WidgetWrapper>

<style>
  photo-wrapper {
    display: block;
    width: calc(1.5 * var(--CELL_SIZE));
    aspect-ratio: 1;
    background-color: var(--FADED_TEXT_COLOR);
    border-radius: 100%;
    margin: auto;
  }

  text-wrapper {
    display: block;
    font-size: 24px;
    width: fit-content;
    margin: calc(var(--GAP_SIZE) / 2) auto var(--GAP_SIZE);
    font-weight: bold;
  }

  field-container {
    display: flex;
    flex-direction: column;
    gap: calc(var(--GAP_SIZE) / 2);
  }
  field-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  label-wrapper {
    color: var(--FADED_TEXT_COLOR);
    font-size: 15px;
  }
  entry-wrapper {
    color: var(--TEXT_COLOR);
    font-size: 15px;
  }
</style>
