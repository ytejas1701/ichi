<script>
  import ColContainer from "$lib/components/ColContainer.svelte";
  import RowContainer from "$lib/components/RowContainer.svelte";
  import ActiveDaysWrapper from "$lib/widgets/ActiveDaysWrapper.svelte";
  import CountWidget from "$lib/widgets/CountWidget.svelte";
  import ProfileWidget from "$lib/widgets/ProfileWidget.svelte";
  import StreakWidget from "$lib/widgets/StreakWidget.svelte";
</script>

<wrapper>
  <ColContainer>
    <RowContainer>
      <ProfileWidget username={"Anomander"} dateJoined={"14 Feb 2024"} daysActive={12} rank={1}/>
      <ColContainer>
        <StreakWidget streak={24}/>
        <RowContainer>
          <CountWidget label={"kanji"} count={6}/>
          <CountWidget label={"vocab"} count={4}/>
        </RowContainer>
      </ColContainer>
    </RowContainer>
  </ColContainer>
</wrapper>

<style>
  wrapper {
    width:fit-content;
    height:fit-content;
    position:absolute;
    display:block;
    top:50%;
    left: 50%;
    transform:translate(-50%, -50%)
  }
</style>