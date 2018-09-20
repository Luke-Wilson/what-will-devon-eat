<template>
  <div>
    <input type="text" v-model='playerName'/>
    <button @click='handleCreatePlayer'>Create Player</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
