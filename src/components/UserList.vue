<template>
  <div>
    <slot name="header">
      <h2>default header</h2>
    </slot>
    <ul :class="$style['user-list']">
      <user v-for="(user, index) in users" :user="user" :key="index" v-bind="$attrs">
        <show-length slot="length" slot-scope="{ len }" :len="len"/>
      </user>
    </ul>
    <slot name="footer">
      <h2>default footer</h2>
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
      console.log(this.$attrs);
      console.log(this.$slots);
    },
  };
</script>

<style lang="scss" module>
  .user-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .user {
    display: block;
  }
</style>
