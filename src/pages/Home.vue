<template>
  <div class="home">
    <div :class="$style.test">
      <button @click="showLoading">show body</button>
      <button @click="showLoading1">show list1</button>
      <button @click="showLoading2">show list2</button>
      <button @click="closeLoading">close</button>
    </div>
    <user-list ref="list1" :users="users" text="test1" aaa="123">
      <div style="font-size: 24px; font-weight: 700;" slot="header">list 1</div>
      <div slot="footer">slot footer</div>
    </user-list>
    <user-list ref="list2" :users="users" text="test2" bbb="123">
      <div style="font-size: 24px; font-weight: 700;" slot="header">list 2</div>
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
      showLoading() {
        loading.show('test');
      },
      showLoading1() {
        loading.show('指定target', {
          target: this.$refs.list1.$el,
        });
      },
      showLoading2() {
        loading.show('指定target', {
          target: this.$refs.list2.$el,
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
