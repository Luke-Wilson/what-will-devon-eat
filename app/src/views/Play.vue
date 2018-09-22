<template>
  <div>
    <scoreboard />
    <waiting-message v-if='foodModule.currentQuestionIndex < 0' />
    <question v-else />
    <messages />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import router from '@/router'

import Question from '@/components/Question'
import Scoreboard from '@/components/Scoreboard'
import Messages from '@/components/Messages'
import WaitingMessage from '@/components/WaitingMessage'

export default {
  name: "Play",
  components: {
    Question,
    Scoreboard,
    Messages,
    WaitingMessage,
  },
  computed: {
    ...mapState(['foodModule']),
    ...mapGetters(['gameFinished']),
  },
  updated() {
    if (this.gameFinished) {
      router.push('/winners')
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.gameFinished) {
        router.push('/winners')
      }
    })
  },
}
</script>
