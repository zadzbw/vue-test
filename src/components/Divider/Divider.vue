<template>
  <div class="divider">
    <span v-if="hasContent" class="divider-text">
      <slot name="content"/>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'divider',
    computed: {
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
    user-select: none;

    &:before, &:after {
      content: '';
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      border-top: 1px solid #b2b2b2;
      transform: scaleY(.5) translateY(50%);
    }

    &-text {
      display: inline-block;
      padding: 0 20px;
    }
  }
</style>
