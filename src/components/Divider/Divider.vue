<template>
  <div :class="dividerClass">
    <span v-if="hasContent" class="divider-content">
      <slot name="content"/>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      dashed: Boolean,
    },
    name: 'divider',
    computed: {
      dividerClass() {
        return {
          divider: true,
          'divider-dashed': this.dashed,
        };
      },
      hasContent() {
        return !!this.$slots.content;
      },
    },
  };
</script>

<style lang="scss">
  .divider {
    display: table;
    white-space: nowrap;
    text-align: center;
    background: transparent;
    font-size: 12px;
    color: #9b9b9b;
    margin: 25px 0;
    width: 100%;

    &:before, &:after {
      content: '';
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      border-top: 1px solid #b2b2b2;
      transform: scaleY(.5) translateY(50%);
    }

    &-dashed {
      &:before, &:after {
        border-top-style: dashed;
      }
    }

    &-content {
      display: inline-block;
      padding: 0 20px;
    }
  }
</style>
