export default {
  data() {
    return {
      scale: 2,
      canvasWidth: 640,
      canvasHeight: 360,
      width: 0,
      height: 0,
      isUnmount: false,
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.width = canvas.width / this.scale;
    this.height = canvas.height / this.scale;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(this.scale, this.scale);
  },
  beforeDestroy() {
    this.isUnmount = true;
  },
  computed: {
    yPosition() {
      return this.height / 2;
    },
    canvasStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },
};
