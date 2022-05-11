<template>
  <li>
    {{ element.title }}
  </li>
</template>

<script>
export default {
  name: 'ListEl',

  props: {
    element: {
      type: Object,
      required: true,
    },
  },
}
</script>
