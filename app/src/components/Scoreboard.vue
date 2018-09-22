<template>
  <div class="scoreboard">
    <span class="scoreboard__name">{{playerModule.playerName}}</span>
    <span class="scoreboard__score">{{playerModule.score}} points</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Scoreboard",
  computed: {
    ...mapState(['playerModule'])
  }
}
</script>

<style lang="css">
  .scoreboard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    font-size: 1.2em;
    color: white;
    background-color: black;
  }




</style>
