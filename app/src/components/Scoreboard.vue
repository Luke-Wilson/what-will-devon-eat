<template>
  <div class="scoreboard">
    <span>{{playerModule.playerName}}</span>
    <span>{{playerModule.score}}</span>
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
    flex-direction: column;
  }
</style>
