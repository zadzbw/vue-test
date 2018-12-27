export default {
  data() {
    return {
      width: 0,
      height: 0,
      isUnmount: false,
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    this.width = canvas.width / 4;
    this.height = canvas.height / 4;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(4, 4);
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
  methods: {
    run(callback) {
      if (!this.isUnmount) {
        window.requestAnimationFrame(() => {
          this.run(callback);
        });
      }
      callback(this.ctx);
    },
  },
};
