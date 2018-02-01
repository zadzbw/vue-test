<template>
  <div class="home">
    <user-list :users="users" text="test" aaa="123">
      <h2 slot="footer">slot footer</h2>
    </user-list>
  </div>
</template>

<script>
  import UserList from '../components/UserList';

  export default {
    name: 'home',
    components: {
      UserList,
    },
    data() {
      return {
        users: [
          { name: 'sky', age: 20 },
          { name: 'fly', age: 25 },
          { name: 'moon', age: 30 },
        ],
      };
    },
    mounted() {
    },
  };
</script>

<style lang="scss">
  .home {
    font-size: 20px;
  }
</style>
