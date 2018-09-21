<template>
  <div class="player-name-input">
    <div class="form-group">
      <input class="form-control form-control-lg" v-model='playerName' placeholder="Enter your player name"/>
      <button class='btn btn-primary' :disabled='!playerName.length' @click.prevent='handleCreatePlayer'>Create Player</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import router from '@/router'

export default {
  name: "PlayerNameInput",
  data: () => ({
    playerName: "",
  }),
  methods: {
    ...mapActions(['createPlayer']),
    handleCreatePlayer(e) {
      this.createPlayer({playerName: this.playerName})
    },
  },
}
</script>

<style media="screen">
  .player-name-input {
    display: flex;
    justify-content: center;
  }

  .player-name-input input, .player-name-input button {
    margin: 10px 0;
  }
</style>
