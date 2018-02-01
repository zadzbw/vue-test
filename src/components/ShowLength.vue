<template>
  <span :class="$style['show-length']">
    len: {{len}}
  </span>
</template>

<script>
  export default {
    name: 'show-length',
    props: ['len'],
  };
</script>

<style lang="scss" module>
  .show-length {
    font-weight: 700;
  }
</style>
