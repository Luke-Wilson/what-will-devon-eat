<template>
  <div>
    <input id="player-name-input" v-model='playerName'/>
    <button :disabled='!playerName.length' @click.prevent='handleCreatePlayer'>Create Player</button>
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
  #player-name-input {
    background-color: black;
    color: white;
  }
</style>
