<template>
  <div class="food-component">
    <div class="food-component--name">{{food.name}}</div>
    <button class="btn"
      @click='handleAnswer("yes")'
      :class='{"btn-dark": this.food.answer === "yes"}'
    >
      Yes
    </button>

    <button class="btn"
      @click='handleAnswer("no")'
      :class='{"btn-dark": this.food.answer === "no"}'
    >
      No
    </button>

    <button class="btn"
      @click='handleAnswer("sometimes")'
      :class='{"btn-dark": this.food.answer === "sometimes"}'
    >
      Sometimes
    </button>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "FoodComponent",
  props: {
    food: Object
  },
  methods: {
    ...mapMutations(['UPDATE_ANSWER']),
    handleAnswer(answer) {
      this.UPDATE_ANSWER({id: this.food.id, answer})
    },
  },
}
</script>

<style media="screen" >
  .food-component {
    margin: 10px 10px 0 10px;
    display: flex;
    justify-content: space-between;
  }

  .food-component--name {
    flex: 0 0 30%;
  }

  .btn {
    margin: 0 5px;
  }
</style>
