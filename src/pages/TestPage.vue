<template>
  <div style="text-align: left;">
    <h3>日常</h3>
    <div>
      <p>渐变border</p>
      <gradient-border-button>test</gradient-border-button>
      <gradient-border-button/>
    </div>
  </div>
</template>

<script>
  import GradientBorderButton from '../components/GradientBorderButton';

  export default {
    components: {
      GradientBorderButton,
    },
  };
</script>

<style lang="scss" module>
</style>
