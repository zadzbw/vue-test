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
  @import "../style/variables";

  .show-length {
    font-weight: 700;
    color: darken($vue-green, 10%);
  }
</style>
