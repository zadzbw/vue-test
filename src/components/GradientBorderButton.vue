<template>
  <div :class="$style.btn">
    <slot>button</slot>
  </div>
</template>

<script>
  const colors = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#0000ff',
    '#ff00ff',
  ];
  colors.forEach((color, index) => {
    CSS.registerProperty({ name: `--color${index + 1}`, syntax: '<color>', initialValue: color, inherits: true });
  });

  export default {};
</script>

<style lang="scss" module>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    border: 4px solid transparent;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 32px;
    background-image: linear-gradient(#eee, #eee),
    conic-gradient(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5), var(--color6), var(--color1));
    background-size: 200% 200%;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    animation: rotate 5s linear infinite;
  }

  $colors: (#ff0000), (#ffff00), (#00ff00), (#00ffff), (#0000ff), (#ff00ff);

  @function getIndex($len, $index) {
    @if $index > $len {
      @return $index - $len;
    }
    @return $index;
  }

  @keyframes rotate {
    $colorSize: length($colors);

    @for $i from 1 through $colorSize {
      #{$i * 100% / $colorSize} {
        @for $j from 1 through $colorSize {
          #{--color + $j}: nth($colors, getIndex($colorSize, $i + $j));
        }
      }
    }
  }
</style>
