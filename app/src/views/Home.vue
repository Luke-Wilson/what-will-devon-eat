<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" v-model='playerName'/>
    <button @click='createHandler'>Create</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: () => ({
    playerName: "",
  }),
  methods: {
    ...mapActions(['createPlayer']),
    createHandler(e) {
      console.log('firing createHandler')
      this.createPlayer({playerName: this.playerName})
    }
  },
}
</script>
