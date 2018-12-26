<template>
  <div class="todo-list-wrapper">
    <label>
      <input
        v-model="newTodoText"
        @keyup.enter="addNewTodo"
        type="text"
        placeholder="add a todo"
      />
    </label>
    <button @click="shuffleTodo">shuffle</button>
    <transition-group
      class="todo-list"
      tag="ul"
      :move-class="$style.move"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
    >
      <todo-item
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        @delete1="deleteTodo"
        @delete2="items.splice(index, 1)"
      />
    </transition-group>
  </div>
</template>

<script>
  import classNames from 'classnames';
  import TodoItem from './TodoItem';
  import shuffle from '../../utils/shuffle';

  export default {
    name: 'todo-list',
    components: {
      TodoItem,
    },
    data() {
      return {
        newTodoText: '',
        nextTodoId: 2,
        items: [
          {
            id: 1,
            text: 'to study',
          },
        ],
      };
    },
    computed: {
      enterActiveClass() {
        return classNames('animated', {
          fadeInRight: true,
        });
      },
      leaveActiveClass() {
        return classNames('animated', {
          fadeOutLeft: true,
          [`${this.$style.leave}`]: true,
        });
      },
    },
    methods: {
      addNewTodo() {
        const newTodo = {
          id: this.nextTodoId++,
          text: this.newTodoText,
        };
        // 随机位置插入
        const index = Math.floor(Math.random() * this.items.length);
        this.items.splice(index, 0, newTodo);
        this.newTodoText = '';
      },
      deleteTodo(id) {
        this.items = this.items.filter(item => item.id !== id);
      },
      shuffleTodo() {
        this.items = shuffle(this.items);
      },
    },
  };
</script>

<style lang="scss">
  .todo-list {
    width: 500px;
    text-align: left;
  }
</style>

<style lang="scss" module>
  .move {
    transition: all 0.5s ease-out;
  }

  .leave {
    position: absolute;
  }
</style>
