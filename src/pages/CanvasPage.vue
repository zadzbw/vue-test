<template>
  <div :class="$style['wrapper']">
    <wave/>
    <square-wave/>
  </div>
</template>

<script>
  import Wave from '../components/Wave';
  import SquareWave from '../components/SquareWave';

  export default {
    components: {
      Wave,
      SquareWave,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" module>
  .wrapper {
    canvas {
      margin-bottom: 16px;
    }
  }
</style>
