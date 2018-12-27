<template>
  <div>
    <canvas :style="canvasStyle" width="2560" height="1440" ref="canvas"></canvas>
  </div>
</template>

<script>
  /* eslint-disable no-mixed-operators,no-param-reassign */
  import canvasMixin from '../mixins/canvasMixin';

  export default {
    mixins: [canvasMixin],
    data() {
      return {
        phase: 0, // 相位
      };
    },
    mounted() {
      this.run((_ctx) => {
        this.draw(_ctx);
      });
    },
    methods: {
      drawTitle(ctx) {
        ctx.font = '24px Arial';
        ctx.fillText('正弦波与周期为2 * width 的正弦波相乘', 24, 24);
      },
      // 画坐标轴
      drawAxis(ctx) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, this.height);
        ctx.moveTo(0, this.yPosition);
        ctx.lineTo(this.width, this.yPosition);
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.closePath();
      },
      drawWave(ctx, wave) {
        const { amplitude, waveNum, gradient } = wave;
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, this.width, 0);
        grad.addColorStop(0, gradient[0]);
        grad.addColorStop(1, gradient[1]);
        ctx.strokeStyle = grad;
        const cycle = this.width / waveNum; // 周期
        const singleCycle = 2 * this.width; // 需要保证这个调节scale波形的周期为2倍的宽度
        for (let x = 0; x <= this.width; x++) {
          // y = Asin(2πx/T + φ)
          const radians = 2 * Math.PI * x / cycle; // 弧度
          const scale = (Math.sin(2 * Math.PI * x / singleCycle)); // 0 -> 1
          const y = scale * amplitude * Math.sin(radians + this.phase / cycle);
          ctx.lineTo(x, this.yPosition - y);
        }
        ctx.stroke();
        ctx.closePath();
      },
      draw(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.phase += 15;
        this.drawTitle(ctx);
        this.drawAxis(ctx);
        const waves = [
          {
            amplitude: 80, // 振幅
            waveNum: 2, // 完整波形的个数
            gradient: ['#1db5ff', '#4dff78'],
          },
          {
            amplitude: 100, // 振幅
            waveNum: 3, // 完整波形的个数
            gradient: ['#ff3748', '#ffd625'],
          },
          {
            amplitude: 120, // 振幅
            waveNum: 5, // 完整波形的个数
            gradient: ['#db1cff', '#ff8dcf'],
          },
        ];
        waves.forEach(wave => this.drawWave(ctx, wave));
      },
    },
  };
</script>

<style lang="scss" module>
</style>
