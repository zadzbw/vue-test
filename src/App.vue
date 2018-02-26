<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 150px;">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/loading">Loading</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  #app {
    font-family: -apple-system, SF UI Text, Arial, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 16px;
    padding: 24px;
  }

  .nav {
    margin: 8px 0;
  }
</style>
