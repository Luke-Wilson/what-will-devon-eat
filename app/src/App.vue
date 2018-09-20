<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/save-answers">Save Answers</router-link> |
      <router-link to="/play">Play</router-link> |
      <router-link to="/admin">Admin</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    name: "App",
    methods: {
      ...mapMutations([
        'UPDATE_QUESTION_INDEX',
        'REVEAL_ANSWER',
        'UPDATE_PLAYERS_PROP',
      ]),
      ...mapActions([
        'getFoods',
        'calculateNewScore',
      ]),
    },
    mounted() {
      this.getFoods()

      window.socket.on('nextquestionindex', (newIndex) => {
        this.UPDATE_QUESTION_INDEX({newIndex})
        this.UPDATE_PLAYERS_PROP({key: "currentAnswer", value: ""})
      })

      window.socket.on('revealanswer', () => {
        console.log('reveal the answer')
        this.REVEAL_ANSWER()
        this.calculateNewScore()
      })
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
