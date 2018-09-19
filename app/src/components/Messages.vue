<template>
  <div>
    <div class="message-window">
      <h2>Messages</h2>
      <ul>
        <li v-for='message in players.messages'>{{message.playerName}}: {{message.text}}</li>
      </ul>
    </div>
    <input type="text" v-model='text' />
    <button @click='handleSend'>Send</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "Messages",
  data: () => ({
    text: "",
  }),
  computed: {
    ...mapState(['players'])
  },
  methods: {
    ...mapMutations(['PUSH_MESSAGE']),
    handleSend() {
      if (this.text.length) {
        window.socket.emit('message', {
          playerName: this.players.playerName,
          text: this.text,
        })
        this.text = ""
      }
    },
  },
  mounted() {
    window.socket.on('message', message => {
      console.log({message})
      this.PUSH_MESSAGE({message})
    })
  }
}
</script>
