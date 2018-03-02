<template>
  <div :class="$style['home-page']">
    <h2>home page</h2>
    <br>
    <test-component v-model="foo" :bar.sync="bar"/>
  </div>
</template>

<script>
  // import TestComponent from '../components/TestComponent';

  export default {
    components: {
      TestComponent: () => import('../components/TestComponent'),
    },
    data() {
      return {
        foo: 'foo',
        bar: 'bar',
      };
    },
    mounted() {
      window.home = this;
    },
    methods: {},
  };
</script>

<style lang="scss" module>
  .home {
    &-page {
      font-size: 20px;
    }
  }
</style>

<style>
  .demo {
    line-height: 1.5;
  }
</style>
