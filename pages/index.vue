<template>
  <ul>
    <ListEl v-for="el of list" :key="el.id" :element="el.id" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    if (process.server) await store.dispatch('loadList')
  },

  computed: {
    list() {
      return this.$store.state.list
    },
  },

  mounted() {
    this.$store.state.list.push({ id: 3, title: 'el 3' })
  },
})
</script>
