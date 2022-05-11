<template>
  <ul>
    <!-- :element need element object with title  -->
    <ListEl v-for="el of list" :key="el.id" :element="el" />
    <!-- <ListEl v-for="el of list" :key="el.id" :element="el.id" /> -->
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    // error: store is undefined use $store \
    // warn: process.server not need 
    if (process.server) await store.dispatch('loadList')
  },

  computed: {
    // warn: variable naming 
    list() {
      return this.$store.state.list
    },
  },

  mounted() {
    // error: Do not mutate vuex store state outside mutation handlers.
    this.$store.state.list.push({ id: 3, title: 'el 3' })
  },
})
</script>
