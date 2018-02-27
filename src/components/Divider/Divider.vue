<template>
  <div :class="dividerClass">
    <span v-if="hasContent" class="divider-content" :style="{ color: contentColor }">
      <slot name="content"/>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      dashed: Boolean,
      type: {
        type: String,
        default: 'horizontal',
      },
      contentColor: String,
    },
    name: 'divider',
    computed: {
      isHorizontal() {
        return this.type === 'horizontal';
      },
      hasContent() {
        return !!this.$slots.content && this.isHorizontal;
      },
      dividerClass() {
        return {
          divider: true,
          [`divider-${this.type}`]: true,
          'divider-has-content': this.hasContent,
          'divider-dashed': this.dashed,
        };
      },
    },
  };
</script>

<style lang="scss">
  $divider: divider;

  .#{$divider} {
    font-size: 14px;
    padding: 0;
    line-height: 1.5;

    &-vertical {
      display: inline-block;
      position: relative;
      width: 1px;
      height: 0.9em;
      vertical-align: middle;
      top: -0.1em;
      margin: 0 3px;
      border-right: 1px solid #b2b2b2;
      transform: scaleX(0.5);

      &.#{$divider}-dashed {
        border-style: none dashed none none;
      }
    }

    &-horizontal {
      position: relative;
      width: 100%;
      height: 1px;
      margin: 25px 0;

      &.#{$divider}-dashed {
        &:before, &:after {
          border-style: dashed none none;
        }
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid #b2b2b2;
        transform: scaleY(0.5);
        transform-origin: 0 0;
      }
    }

    &-has-content {
      display: table;
      white-space: nowrap;
      text-align: center;

      &:before, &:after {
        content: '';
        display: table-cell;
        position: relative;
        top: 50%;
        left: 0;
        width: 50%;
        border-top: 1px solid #b2b2b2;
        transform: scaleY(.5) translateY(50%);
        transform-origin: initial;
      }
    }

    &-content {
      display: inline-block;
      padding: 0 20px;
    }
  }
</style>