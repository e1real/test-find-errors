<template>
  <li>
    {{ element.title }}
  </li>
</template>

<script>
export default {
  // bad component naming
  name: 'ListEl',

  props: {
    element: {
      type: Object,
      required: true,
    },
  },
}
</script>
