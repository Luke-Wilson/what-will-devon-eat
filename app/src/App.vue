<template>
  <div id="app">
    <div v-if='playerModule.playerName === "admin"' id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/save-answers">Save Answers</router-link> |
      <router-link to="/play">Play</router-link> |
      <router-link to="/admin">Admin</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapState } from 'vuex'

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
    computed: {
      ...mapState(['playerModule']),
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
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 5;
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

.container {
  height: 100vh;
  overflow: hidden;
}

.sliding-background {
  background: url("/assets/food-icon-set-v2-01-.jpeg") repeat-x;
  background-size: auto;
  height: 100vh;
  width: 3483px;
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-1692px, 0, 0); /* The image width */
  }
}
</style>
