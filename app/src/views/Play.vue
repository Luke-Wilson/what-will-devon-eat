<template>
  <div>
    <scoreboard />
    <question />
    <!-- <messages /> -->
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import router from '@/router'

import Question from '@/components/Question'
import Scoreboard from '@/components/Scoreboard'
import Messages from '@/components/Messages'

export default {
  name: "Play",
  components: {
    Question,
    Scoreboard,
    Messages,
  },
  computed: {
    ...mapGetters([
      'currentQuestion',
      'gameFinished',
    ]),
  },
  methods: {
    ...mapActions(['getFoods']),
    ...mapMutations(['UPDATE_QUESTION_INDEX']),
  },
  updated() {
    console.log('this.gameFinished')
    console.log(this.gameFinished)
    if (this.gameFinished) {
      router.go('/winners')
    }
  },
}
</script>
