<template>
  <div
    :class="$style.loader"
    :style="loaderStyle"
  >
    <div
      v-for="i in dotNum"
      :key="i"
      :class="$style['dot-wrapper']"
      :style="dotWrapperStyle(i)"
    >
      <div
        :class="$style.dot"
        :style="dotStyle(i)"
      >
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-mixed-operators */

  export default {
    name: '',
    props: {
      loaderSize: {
        type: Number,
        default: 300,
      },
      dotSize: {
        type: Number,
        default: 24,
      },
      dotNum: {
        type: Number,
        default: 12,
      },
      dotColor: {
        type: String,
        default: '#f36',
      },
    },
    computed: {
      loaderStyle() {
        return {
          width: `${this.loaderSize}px`,
          height: `${this.loaderSize}px`,
        };
      },
    },
    methods: {
      dotWrapperStyle(i) {
        const rad = 2 * Math.PI / this.dotNum * (i - 1); // 对应的弧度
        const radius = (this.loaderSize - this.dotSize) / 2; // loader半径
        const offsetX = `${Math.sin(rad) * radius}px`;
        const offsetY = `${Math.cos(rad) * radius}px`;

        return {
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`,
          marginTop: `-${this.dotSize / 2}px`,
          marginLeft: `-${this.dotSize / 2}px`,
          transform: `translate(${offsetX}, ${offsetY})`,
        };
      },
      dotStyle(i) {
        const delay = -1 * (i * this.dotNum * 0.1 / this.dotNum);
        const duration = this.dotNum * 0.1;

        return {
          width: `${this.dotSize}px`,
          height: `${this.dotSize}px`,
          backgroundColor: this.dotColor,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        };
      },
    },
  };
</script>

<style lang="scss" module>
  .loader {
    position: relative;
    background-color: #0dcadb;
    transform-origin: center;
  }

  .dot-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .dot {
    animation: ball-spin infinite ease-in-out;
    border-radius: 50%;
  }

  @keyframes ball-spin {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 0;
      transform: scale(0);
    }
  }
</style>
