<template>
  <div :class="$style['home-page']">
    <p>vue</p>
    <div
      v-for="(value, index) in arr"
      :key="index"
      class="demo"
    >
      {{ index }} : {{ value }}
    </div>
    <button @click="change">click</button>
  </div>
</template>

<script>
  import shuffle from '../utils/shuffle';

  export default {
    components: {},
    data() {
      return {
        arr: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
      };
    },
    mounted() {
      window.home = this;
    },
    methods: {
      change() {
        this.arr = shuffle(this.arr);
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

<style>
  .demo {
    line-height: 1.5;
  }
</style>
