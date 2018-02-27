<template>
  <li class="todo-item">
    {{item.id}} - {{item.text}} - <span :class="$style.test">{{checked}}</span>
    <button @click="d1">x1</button>
    <button @click="d2">x2</button>
    <button @click="toggle">toggle</button>
  </li>
</template>

<script>
  export default {
    props: ['item'],
    name: 'todo-item',
    data() {
      return {
        checked: true,
      };
    },
    methods: {
      toggle() {
        this.checked = !this.checked;
      },
      d1() {
        this.$emit('delete1', this.item.id);
      },
      d2() {
        this.$emit('delete2');
      },
    },
  };
</script>

<style lang="scss">
  .todo-item {
    line-height: 1.5;
  }
</style>

<style lang="scss" module>
  .test {
    font-weight: bold;
    font-size: 16px;
    color: #42b983;
  }
</style>
