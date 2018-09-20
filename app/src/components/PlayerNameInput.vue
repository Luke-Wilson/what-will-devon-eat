<template>
  <div>
    <input type="text" v-model='playerName'/>
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
