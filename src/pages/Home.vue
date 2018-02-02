<template>
  <div class="home">
    <div :class="$style.test">
      <button @click="showLoading1">show1</button>
      <button @click="showLoading2">show2</button>
      <button @click="closeLoading">close</button>
    </div>
    <user-list ref="list" :users="users" text="test" aaa="123">
      <h2 slot="footer">slot footer</h2>
    </user-list>
  </div>
</template>

<script>
  import UserList from '../components/UserList';
  import Loading from '../components/Loading';

  const loading = new Loading();

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
    methods: {
      showLoading1() {
        loading.show('test');
      },
      showLoading2() {
        loading.show('指定target', {
          target: this.$refs.list.$el,
        });
      },
      closeLoading() {
        loading.close();
      },
    },
  };
</script>

<style lang="scss">
  .home {
    font-size: 20px;
  }
</style>

<style lang="scss" module>
  .test {
    text-align: left;
    position: relative;
    z-index: 10000;
  }
</style>
