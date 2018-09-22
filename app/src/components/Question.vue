<template>
  <div>
    <div v-if='!currentQuestion.name'>
      Oh no. Maybe still loading, maybe something broke. Fudge. (Actually, I wonder if Devon eats fudge...)
    </div>
    <div v-else>
      <div id="question">
        <h3>Does Devon eat...</h3>
        <h1>{{ currentQuestion.name }}?</h1>
        <h2 v-if='foodModule.showAnswer'>The answer is: {{ currentQuestion.answer }}</h2>
        <h2 v-else>...</h2>
      </div>
      <div class="options">
        <button
          class='btn btn-lg btn-secondary'
          :class='{
            "btn-warning": playerModule.currentAnswer === "yes" && !foodModule.showAnswer,
            "btn-success": playerModule.currentAnswer === "yes" && currentQuestion.answer === "yes" && foodModule.showAnswer,
            "btn-danger": playerModule.currentAnswer === "yes" && currentQuestion.answer !== "yes" && foodModule.showAnswer,
          }'
          @click='handleAnswer("yes")'
          :disabled='foodModule.showAnswer'
        >
          YES!
        </button>

        <button
          class='btn btn-lg btn-secondary'
          :class='{
            "btn-warning": playerModule.currentAnswer === "no" && !foodModule.showAnswer,
            "btn-success": playerModule.currentAnswer === "no" && currentQuestion.answer === "no" && foodModule.showAnswer,
            "btn-danger": playerModule.currentAnswer === "no" && currentQuestion.answer !== "no" && foodModule.showAnswer,
          }'
          @click='handleAnswer("no")'
          :disabled='foodModule.showAnswer'
        >
          Nope
        </button>

        <button
          class='btn btn-lg btn-secondary'
          :class='{
            "btn-warning": playerModule.currentAnswer === "sometimes" && !foodModule.showAnswer,
            "btn-success": playerModule.currentAnswer === "sometimes" && currentQuestion.answer === "sometimes" && foodModule.showAnswer,
            "btn-danger": playerModule.currentAnswer === "sometimes" && currentQuestion.answer !== "sometimes" && foodModule.showAnswer,
          }'
          @click='handleAnswer("sometimes")'
          :disabled='foodModule.showAnswer'
        >
          Sometimes
        </button>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import router from '@/router'

export default {
  name: "Question",
  computed: {
    ...mapGetters([
      'currentQuestion',
      'gameFinished',
    ]),
    ...mapState([
      'foodModule',
      'playerModule',
    ]),
  },
  methods: {
    ...mapMutations(['UPDATE_PLAYERS_PROP']),
    handleAnswer(answer) {
      this.UPDATE_PLAYERS_PROP({key: "currentAnswer", value: answer})
    },
  },
  updated() {
    console.log('this.gameFinished')
    console.log(this.gameFinished)
    if (this.gameFinished) {
      router.push('winners')
    }
  },
}
</script>

<style media="screen">
  #question {
    background-color: rgba(277,37,233,0.9);
    padding-top: 15px;
    color: white;
  }

  #question .h1, #question .h2, #question .h3 {
    font-weight: 800;
  }

  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255,255,255,0.6);
    padding-bottom: 50px;
  }

  .options button {
    margin-top: 10px;
  }

</style>
