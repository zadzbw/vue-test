<template>
  <div id="app">
    <nav class="nav">
      <img src="./assets/logo.png" style="width: 150px;">
      <router-link exact tag="li" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="li" to="/loading">
        <a>Loading</a>
      </router-link>
      <router-link tag="li" to="/divider">
        <a>Divider</a>
      </router-link>
      <router-link tag="li" to="/todo-list">
        <a>TodoList</a>
      </router-link>
      <router-link tag="li" to="/transition">
        <a>Transition</a>
      </router-link>
      <router-link tag="li" to="/vuex">
        <a>Vuex</a>
      </router-link>
    </nav>
    <div class="main">
      <transition
        :enter-active-class="enterActiveClass"
        :leave-active-class="leaveActiveClass"
      >
        <keep-alive>
          <router-view class="views"/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
  import classNames from 'classnames';

  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-from-right',
      };
    },
    watch: {
      $route(to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ?
          'slide-from-left' :
          'slide-from-right';
      },
    },
    computed: {
      enterActiveClass() {
        return classNames('animated', {
          fadeInLeft: this.transitionName === 'slide-from-left',
          fadeInRight: this.transitionName === 'slide-from-right',
        });
      },
      leaveActiveClass() {
        return classNames('animated', {
          fadeOutRight: this.transitionName === 'slide-from-left',
          fadeOutLeft: this.transitionName === 'slide-from-right',
        });
      },
    },
  };
</script>

<style lang="scss">
  @import "./style/variables";

  #app {
    font-family: -apple-system, SF UI Text, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 24px;
    display: flex;
    height: 100vh;
  }

  .nav {
    flex: 0 0 240px;

    > li {
      display: block;
      padding: 8px 0;

      > a {
        color: #34495e;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid $vue-green;
        }
      }

      &.router-link-active {
        > a {
          color: $vue-green;
        }
      }
    }
  }

  .main {
    flex: 1;
    margin: 0 24px;
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .views {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-bottom: 24px;
    overflow: scroll;
  }

</style>
