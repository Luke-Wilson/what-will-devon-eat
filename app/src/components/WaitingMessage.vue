<template>
  <div class="waiting-message">
    <h2>The game will begin soon.</h2>
    <img v-show='gifIndex === 0' class="waiting-gif" src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" />
    <img v-show='gifIndex === 1' class="waiting-gif" src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" />
    <img v-show='gifIndex === 2' class="waiting-gif" src="https://media.giphy.com/media/o5oLImoQgGsKY/giphy.gif" />
    <img v-show='gifIndex === 3' class="waiting-gif" src="https://media.giphy.com/media/j9UHmOnjCNrIDZRoTe/giphy.gif" />
    <img v-show='gifIndex === 4' class="waiting-gif" src="https://media.giphy.com/media/GiWEowj3nQv9C/giphy.gif" />
    <img v-show='gifIndex === 5' class="waiting-gif" src="https://media.giphy.com/media/hFmIU5GQF18Aw/giphy.gif" />
    <img v-show='gifIndex === 6' class="waiting-gif" src="https://media.giphy.com/media/kpzfYwBT7nUVW/giphy.gif" />
    <img v-show='gifIndex === 7' class="waiting-gif" src="https://media.giphy.com/media/3oEduIwLTB806poveg/giphy.gif" />
    <img v-show='gifIndex === 8' class="waiting-gif" src="https://media.giphy.com/media/xT9KVmINRKGsIzd0YM/giphy.gif" />
    <img v-show='gifIndex === 9' class="waiting-gif" src="https://media.giphy.com/media/5bdgsd3ChyajOVN0rl/giphy.gif" />
  </div>
</template>

<script>
export default {
  name: "WaitingMessage",
  data: () => ({
    gifIndex: 0,
  }),
  methods: {
    incrementGifIndex() {
      this.gifIndex = this.gifIndex >= 9 ? 0 : this.gifIndex + 1
    }
  },
  mounted() {
    setInterval(this.incrementGifIndex, 4000)
  },
  destroyed() {
    clearInterval(this.incrementGifIndex)
  }
}
</script>

<style media="screen">
  .waiting-message {
    min-height: 60vh;
  }

  .waiting-message h2 {
    background-color: white;
    margin: 0;
  }

  .waiting-gif {
    max-height:300px;
    max-width:300px;
    height:auto;
    width:auto;
  }
</style>
