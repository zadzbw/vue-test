<template>
  <div :class="$style['home-page']">
    <h2>home page</h2>
    <button @click="toggle">toggle</button>
    <br>
    <test-component v-if="show" v-model="foo" :bar.sync="bar"/>
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
        show: false,
        foo: 'foo',
        bar: 'bar',
      };
    },
    mounted() {
      window.home = this;
    },
    methods: {
      toggle() {
        this.show = !this.show;
      },
    },
  };
</script>

<style lang="scss" module>
  .home {
    &-page {
      font-size: 20px;
    }
  }
</style>
