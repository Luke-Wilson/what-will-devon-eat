<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if='!players.playerName.length'>
      <input type="text" v-model='playerName'/>
      <button @click='handleCreatePlayer'>Create Player</button>
    </div>
    <messages />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

import Messages from '@/components/Messages.vue'

export default {
  name: 'home',
  components: {
    Messages,
  },
  data: () => ({
    playerName: "",
    text: "",
  }),
  computed: {
    ...mapState(['players'])
  },
  methods: {
    ...mapActions(['createPlayer']),
    ...mapMutations(['PUSH_MESSAGE']),
    handleCreatePlayer(e) {
      console.log('firing handleCreatePlayer')
      this.createPlayer({playerName: this.playerName})
    },
  },
  mounted() {
    window.socket.on('answer', answer => {
      console.log({answer})
      console.log(window.socket)
    })
  }
}
</script>
