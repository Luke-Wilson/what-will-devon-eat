<template>
  <div>
    <h1>Save Answers</h1>
    <food-component v-for='food in foodModule.foods' :food='food' />
    <button class="btn btn-lg btn-success" @click='handleSave'>Save</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import FoodComponent from '@/components/FoodComponent'

export default {
  name: "SaveAnswers",
  components: {
    FoodComponent
  },
  computed: {
    ...mapState(['foodModule']),
  },
  methods: {
    ...mapActions([
      'getFoods',
      'updateFoods',
      'saveFoods'
    ]),
    handleSave() {
      this.saveFoods()
    },
  },
  mounted() {
    console.log('mounted')
    this.getFoods()
  },
}
</script>
