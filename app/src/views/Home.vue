<template>
  <div class="home">
    <div class="header">
      <small>Welcome to...</small>
      <h1>What does Devon eat?</h1>
    </div>
    <img alt="Vue logo" src="../assets/devon.png">

    <player-name-input v-if='!playerModule.playerName.length' />
    <!-- <messages /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Messages from '@/components/Messages.vue'
import PlayerNameInput from '@/components/PlayerNameInput.vue'
import Question from '@/components/Question.vue'
import router from '@/router'

export default {
  name: 'home',
  components: {
    Messages,
    PlayerNameInput,
    Question,
  },
  data: () => ({
    playerName: "",
    text: "",
  }),
  computed: {
    ...mapState(['playerModule'])
  },
  mounted() {
    window.socket.on('answer', answer => {
      console.log({answer})
      console.log(window.socket)
    })
  },
  updated() {
    if (this.playerModule.playerName.length) {
      router.push('play')
    }
  }
}
</script>

<style media="screen">
  .header {
    background-color: rgba(0,0,0,0.5);
    color: white;
  }
</style>
