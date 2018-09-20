<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <question />
    <player-name-input v-if='!playerModule.playerName.length' />
    <messages />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Messages from '@/components/Messages.vue'
import PlayerNameInput from '@/components/PlayerNameInput.vue'
import Question from '@/components/Question.vue'

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
  }
}
</script>
