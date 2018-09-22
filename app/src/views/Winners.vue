<template>
  <div class="winners">
    <h2>And the final scores are...</h2>
    <h5 v-show='revealIndex > 0'>{{revealIndex}}</h5>
    <div v-if='revealWinners' class="score-list">
      <div v-for='player, idx in getOrderedFinalScores' class="score-list__player" v-show='revealIndex <= idx'>
        <div class="score-list__player__name">{{player.playerName}}</div>
        <div class="score-list__player__score">{{player.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Winners",
  data: () => ({
    revealWinners: false,
    revealIndex: 11,
  }),
  computed: {
    ...mapGetters(['getOrderedFinalScores']),
    ...mapState(['playerModule']),
  },
  methods: {
    decrementRevealIndex() {
      this.revealIndex -= 1
    }
  },
  mounted() {
    VueScrollTo.scrollTo('body')

    window.socket.emit('finalscore', {
      playerName: this.playerModule.playerName,
      score: this.playerModule.score,
    })

    setInterval(this.decrementRevealIndex, 1000)

    setTimeout(() => {
      this.revealWinners = true
    }, 2000)
  },
  destroyed() {
    clearInterval(this.decrementRevealIndex)
  }
}
</script>
<style media="screen">
  .score-list__player {
    display: flex;
    justify-content: space-between;
    background-color: orange;
    font-size: 3em;
  }

  .score-list__player__name {
    flex: 1 0 50%;
  }

  .score-list__player__score {
    flex: 1 0 50%;

  }


</style>
