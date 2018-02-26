<template>
  <div :class="$style['loading-page']">
    <div :class="$style['loading-test']">
      <button @click="showLoading">show body</button>
      <button @click="showLoading1">show list1</button>
      <button @click="showLoading2">show list2</button>
      <br>
      <button @click="closeLoading">close body</button>
      <button @click="closeLoading1">close list1</button>
      <button @click="closeLoading2">close list2</button>
    </div>
    <user-list ref="list1" :users="users" text="test1" aaa="123">
      <div slot="header" style="font-size: 24px; font-weight: 700;">list 1</div>
      <div slot="footer">slot footer</div>
    </user-list>
    <user-list ref="list2" :users="users" text="test2" bbb="123">
      <div slot="header" style="font-size: 24px; font-weight: 700;">list 2</div>
    </user-list>
  </div>
</template>

<script>
  import UserList from '../components/UserList';
  import Loading from '../components/Loading';

  const loading = new Loading();

  export default {
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
        this.loading = loading.show('test');
      },
      showLoading1() {
        this.loading1 = loading.show('指定list1', {
          target: this.$refs.list1.$el,
        });
      },
      showLoading2() {
        this.loading2 = loading.show('指定list2', {
          target: this.$refs.list2.$el,
          maskColor: 'rgba(200, 0, 0, 0.5)',
        });
      },
      closeLoading() {
        if (this.loading) {
          this.loading.close();
        }
      },
      closeLoading1() {
        if (this.loading1) {
          this.loading1.close();
        }
      },
      closeLoading2() {
        if (this.loading2) {
          this.loading2.close();
        }
      },
    },
  };
</script>

<style lang="scss" module>
  .loading {
    &-page {
      font-size: 20px;
    }

    &-test {
      text-align: left;
      position: relative;
      z-index: 10000;
    }
  }
</style>
