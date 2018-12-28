<template>
  <div>
    <p>
      <span>选择波形:</span>
      <select v-model="waveName">
        <option
          v-for="(waveItem, key) in waveMap"
          :key="key"
          :value="key"
        >
          {{waveItem.name}}
        </option>
      </select>
    </p>
    <p>
      谐波数量: {{num}}<input type="range" min="1" max="100" v-model.number="num">
    </p>
    <p>
      波形速度: {{speed}}<input type="range" step="0.5" min="0" max="8" v-model.number="speed">
    </p>
    <canvas
      :style="canvasStyle"
      :width="canvasWidth * scale"
      :height="canvasHeight * scale"
      ref="canvas"
    ></canvas>
  </div>
</template>

<script>
  /* eslint-disable no-mixed-operators,no-param-reassign */

  import canvasMixin from '../mixins/canvasMixin';

  const waveNum = 2;

  // sin((2n+1)wx)/2n+1
  const square = (index, baseCycle, phase) => (x) => {
    const amplitude = 2 * 180 / Math.PI; // 2E / π
    // w = 2π/T
    const odd = 2 * index + 1;
    const cycle = baseCycle / odd;
    return amplitude * Math.sin(2 * Math.PI / cycle * (x + phase)) / odd;
  };

  // sin(2nwx)/2n
  const sawtooth = (index, baseCycle, phase) => (x) => {
    const amplitude = 2 * 180 / Math.PI; // 2E / π
    // w = 2π/T
    const even = 2 * index + 2;
    const cycle = baseCycle / even;
    return amplitude * Math.sin(2 * Math.PI / cycle * (x + phase)) / even;
  };

  // cos((2n+1)wx)/(2n+1)^2
  const triangle = (index, baseCycle, phase) => (x) => {
    const amplitude = 4 * 180 / (Math.PI ** 2); // 4E / π^2
    // w = 2π/T
    const odd = 2 * index + 1;
    const cycle = baseCycle / odd;
    return amplitude * Math.cos(2 * Math.PI / cycle * (x + phase)) / (odd ** 2);
  };

  export default {
    mixins: [canvasMixin],
    data() {
      const waveMap = {
        square: {
          name: '方波',
          fn: square,
        },
        sawtooth: {
          name: '锯齿波',
          fn: sawtooth,
        },
        triangle: {
          name: '三角波',
          fn: triangle,
        },
      };
      return {
        phase: 0, // 相位
        speed: 3,
        num: 5, // 叠加波的个数
        max: 50, // 开启动画时，波的最大个数
        waveMap,
        waveName: 'square',
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
      wave() {
        return this.waveMap[this.waveName];
      },
    },
    methods: {
      drawTitle(ctx) {
        ctx.font = '24px Arial';
        ctx.fillText(this.wave.name, 24, 24);
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
      drawWave(ctx) {
        let fns = [];
        ctx.lineWidth = 1;
        // 画出各个奇次谐波
        for (let i = 0; i < this.num; i++) {
          ctx.beginPath();
          const cycle = this.width / waveNum; // 基波周期
          const fn = this.wave.fn(i, cycle, this.phase);
          fns.push(fn);
          for (let x = 0; x <= this.width; x++) {
            const y = fn(x);
            ctx.lineTo(x, this.yPosition - y);
          }
          ctx.stroke();
          ctx.closePath();
        }
        // 画方波，即所有奇次谐波的叠加
        ctx.beginPath();
        for (let x = 0; x <= this.width; x++) {
          const y = fns.map(fn => fn(x)).reduce((a, b) => a + b);
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
        this.drawWave(ctx);
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
