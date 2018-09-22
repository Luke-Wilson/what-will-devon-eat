<template>
  <div class="messages-wrapper">
    <h4>Shoutbox</h4>

    <div class="input-wrapper">
      <input type="text" v-model='text' @keyup.enter='handleSend'/>
      <button @click='handleSend'>Send</button>
    </div>

    <div class='message' v-for='message in playerModule.messages'>
      <div class="message__name-wrapper">
        <span class="message__name">{{message.playerName}}:</span>
      </div>
      <span class="message__text">{{message.text}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: "Messages",
  data: () => ({
    text: "",
  }),
  computed: {
    ...mapState(['playerModule'])
  },
  methods: {
    ...mapMutations(['PUSH_MESSAGE']),
    ...mapActions(['addMessage']),
    handleSend() {
      if (this.text.length) {
        window.socket.emit('message', {
          playerName: this.playerModule.playerName,
          text: this.text,
        })
        this.text = ""
      }
    },
  },
  mounted() {
    window.socket.on('message', message => {
      this.addMessage(message)
    })
  },
}
</script>

<style media="screen">
  .messages-wrapper {
    /* position: absolute; */
    /* bottom: 0; */
    /* right: 0; */
    /* left: 0; */
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
  }

  .input-wrapper {
    margin-bottom: 5px;
  }

  .message {
    display: flex;
    justify-content: flex-start;
  }

  .message__name-wrapper {
    flex: 0 0 30%;
    display: flex;
    justify-content: flex-end;
  }

  .message__name {
    text-align: right;
    padding: 3px 7px;
    margin: 2px 0;
  }

  .message__text {
    text-align: left;
    background-color: #007AFF;
    min-width: 40px;
    color: white;
    padding: 3px 7px;
    margin: 2px 0;
    border-radius: 15px;
  }
</style>
