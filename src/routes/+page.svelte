<script>
  import ColContainer from "$lib/components/ColContainer.svelte";
  import RowContainer from "$lib/components/RowContainer.svelte";
  import ActiveDaysWrapper from "$lib/widgets/ActiveDaysWrapper.svelte";
  import CountWidget from "$lib/widgets/CountWidget.svelte";
  import ProfileWidget from "$lib/widgets/ProfileWidget.svelte";
  import StreakWidget from "$lib/widgets/StreakWidget.svelte";
</script>

<ColContainer>
  <RowContainer>
    <ProfileWidget username={"Anomander"} dateJoined={"14 Feb 2024"} daysActive={125} rank={135848}/>
    <ColContainer>
      <StreakWidget streak={24}/>
      <RowContainer>
        <CountWidget label={"kanji"} count={23}/>
        <CountWidget label={"vocab"} count={125}/>
      </RowContainer>
    </ColContainer>
    <ActiveDaysWrapper/>
  </RowContainer>
  <!-- <RowContainer>
    <KanjiWrapper kanji={"水"} size={2}/>
    <KanjiWrapper kanji={"水"} size={2}/>
    <KanjiWrapper kanji={"水"} size={2}/>
    <KanjiWrapper kanji={"水"} size={2}/>
  </RowContainer> -->
</ColContainer>