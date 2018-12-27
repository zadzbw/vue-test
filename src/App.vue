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
      <router-link tag="li" to="/canvas">
        <a>Canvas</a>
      </router-link>
    </nav>
    <div class="main">
      <router-view class="views"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {};
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
