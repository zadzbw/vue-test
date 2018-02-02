<template>
  <div :class="$style['user-list-wrapper']">
    <slot name="header">
      <div>default header</div>
    </slot>
    <ul :class="$style['user-list']">
      <user v-for="(user, index) in users" :user="user" :key="index" v-bind="$attrs">
        <show-length slot="length" slot-scope="{ len }" :len="len"/>
      </user>
    </ul>
    <slot name="footer">
      <div>default footer</div>
    </slot>
  </div>
</template>

<script>
  import User from './User';
  import ShowLength from './ShowLength';

  export default {
    name: 'user-list',
    props: ['users'],
    components: {
      User,
      ShowLength,
    },
    mounted() {
      // console.log(this.$attrs);
      // console.log(this.$slots);
    },
  };
</script>

<style lang="scss" module>
  .user-list-wrapper {
    display: block;
    margin: 16px 0;
  }

  .user-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
</style>
