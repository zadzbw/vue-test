<template>
  <div>
    <h2>Vuex</h2>
    <router-link tag="p" to="/vuex/count">
      <a>Count</a>
    </router-link>
    <router-link tag="p" to="/vuex/todo">
      <a>Todo</a>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vuex-page',
  };
</script>

<style lang="scss">

</style>
