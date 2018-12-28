<template>
  <div>
    <p>
      奇次谐波数量: {{num}}<input type="range" min="1" max="50" v-model.number="num">
    </p>
    <p>
      波形速度: {{speed}}<input type="range" min="0" max="20" v-model.number="speed">
    </p>
    <canvas :style="canvasStyle" width="2560" height="1440" ref="canvas"></canvas>
  </div>
</template>

<script>
  /* eslint-disable no-mixed-operators,no-param-reassign */

  import canvasMixin from '../mixins/canvasMixin';

  const waveNum = 2;

  const f = (odd, cycle, phase) => x => Math.sin(2 * Math.PI * x / cycle + phase / cycle) / odd;

  export default {
    mixins: [canvasMixin],
    data() {
      return {
        phase: 0, // 相位
        speed: 10,
        num: 5, // 叠加波的个数
        max: 10, // 开启动画时，波的最大个数
      };
    },
    mounted() {
      this.run((_ctx) => {
        this.draw(_ctx);
      });
    },
    watch: {
      num(newValue, oldValue) {
        if (newValue > this.max || (newValue <= this.max && oldValue > this.max)) {
          this.run((_ctx) => {
            this.draw(_ctx);
          });
        }
      },
    },
    computed: {
      needAnimation() {
        return this.num <= this.max;
      },
    },
    methods: {
      drawTitle(ctx) {
        ctx.font = '24px Arial';
        ctx.fillText('方波', 24, 24);
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
      drawSin(ctx) {
        const amplitude = 1.2 * 2 * this.yPosition / Math.PI; // 2E / π
        let fns = [];
        ctx.lineWidth = 1;
        // 画出各个奇次谐波
        for (let i = 0; i < this.num; i++) {
          ctx.beginPath();
          const odd = 2 * i + 1;
          const cycle = this.width / waveNum / odd; // 周期
          const fn = f(odd, cycle, this.phase);
          fns.push(fn);
          for (let x = 0; x <= this.width; x++) {
            // y = sin(wx) + sin(3wx) / 3 + sin(5wx) / 5 + ....
            const y = amplitude * fn(x);
            ctx.lineTo(x, this.yPosition - y);
          }
          ctx.stroke();
          ctx.closePath();
        }

        // 画方波，即所有奇次谐波的叠加
        ctx.beginPath();
        for (let x = 0; x <= this.width; x++) {
          // y = sin(wx) + sin(3wx) / 3 + sin(5wx) / 5 + ....
          const y = amplitude * fns.map(fn => fn(x)).reduce((a, b) => a + b);
          ctx.lineTo(x, this.yPosition - y);
        }
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        fns = null;
      },
      draw(ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
        if (this.needAnimation) {
          this.phase += this.speed;
        }
        this.drawTitle(ctx);
        this.drawAxis(ctx);
        this.drawSin(ctx);
      },
      run(callback) {
        if (!this.isUnmount && this.needAnimation) {
          window.requestAnimationFrame(() => {
            this.run(callback);
          });
        }
        callback(this.ctx);
      },
    },
  };
</script>

<style scoped>

</style>
