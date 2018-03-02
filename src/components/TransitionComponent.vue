<template>
  <transition-group
    v-if="isGroup"
    :tag="tag"
    :move-class="$style.move"
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
  >
    <slot/>
  </transition-group>
  <transition
    v-else
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
  >
    <slot/>
  </transition>
</template>

<script>
  import classNames from 'classnames';

  export default {
    name: 'transition-component',
    props: {
      isGroup: {
        type: Boolean,
        default: false,
      },
      tag: {
        type: String,
        default: 'span',
      },
    },
    computed: {
      enterActiveClass() {
        return classNames('animated', {
          fadeInDown: true,
        });
      },
      leaveActiveClass() {
        return classNames('animated', {
          fadeOutDown: true,
          [`${this.$style.leave}`]: true,
        });
      },
    },
  };
</script>

<style lang="scss" module>
  .move {
    transition: all 0.7s ease-out;
  }

  .leave {
    position: absolute;
  }
</style>
