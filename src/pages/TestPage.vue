<template>
  <div :class="$style.page">
    <h3>日常</h3>
    <div>
      <p>渐变border</p>
      <gradient-border-button>test</gradient-border-button>
      <gradient-border-button/>
    </div>
    <div>
      <div id="div1" style="height: 64px;width: 64px;background-color: #00ff00;">123</div>
      <button @click="handleClick">click</button>
    </div>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap/TweenMax';
  import GradientBorderButton from '../components/GradientBorderButton';

  export default {
    components: {
      GradientBorderButton,
    },
    methods: {
      handleClick() {
        TweenMax.to(document.querySelector('#div1'), 2, { x: '+=200', rotation: '+=180', backgroundColor: '#ff00ff' });
      },
    },
  };
</script>

<style lang="scss" module>
  .page {
    text-align: left;

    > div {
      margin-bottom: 16px;
    }
  }
</style>
