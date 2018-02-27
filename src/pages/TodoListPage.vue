<template>
  <div class="todo-list-page">
    <h2>Todo-List</h2>
    <todo-list/>
  </div>
</template>

<script>
  import TodoList from '../components/TodoList/TodoList';

  export default {
    name: 'todo-list-page',
    components: { TodoList },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">

</style>
