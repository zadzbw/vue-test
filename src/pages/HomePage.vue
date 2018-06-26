<template>
  <div :class="$style['home-page']">
    <h2>home page</h2>
    <button @click="toggle">toggle</button>
    <br>
    <test-component v-if="show" v-model="foo" :bar.sync="bar"/>
    <br>
    <loader
      :loader-size="loaderSize"
      :dot-size="dotSize"
      :dot-num="dotNum"
      :dot-color="dotColor"
    />
    <label>
      loader大小 - {{loaderSize}}:
      <input type="range" min="120" max="360" v-model.number="loaderSize">
    </label>
    <label>
      dot大小: <input type="range" min="12" max="40" v-model.number="dotSize">
    </label>
    <label>
      dot数量: <input type="range" min="8" max="20" v-model.number="dotNum">
    </label>
    <label>
      dot颜色: <input type="color" v-model="dotColor">
    </label>
  </div>
</template>

<script>
  // import TestComponent from '../components/TestComponent';
  import Loader from '../components/Loader/Loader';

  export default {
    components: {
      TestComponent: () => import('../components/TestComponent'),
      Loader,
    },
    data() {
      return {
        show: false,
        foo: 'foo',
        bar: 'bar',
        loaderSize: 200,
        dotSize: 24,
        dotNum: 12,
        dotColor: 'red',
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
