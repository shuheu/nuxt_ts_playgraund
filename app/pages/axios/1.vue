<template>
  <v-container>
    <div class="text-center">
      <v-btn rounded color="primary" dark @click="call()"> call </v-btn>
    </div>
    <div class="text-center">
      {{ res }}
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

type DataTypes = {
  res: Object
  res2: Object
}

export default Vue.extend({
  data(): DataTypes {
    return {
      res: {},
      res2: '',
    }
  },
  methods: {
    call(): void {
      this.$axios('https://jsonplaceholder.typicode.com/todos/1').then(
        (response) => (this.res = response.data)
      )
    },
  },
})
</script>
