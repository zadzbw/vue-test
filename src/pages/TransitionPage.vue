<template>
  <div class="transition-page">
    <div>
      <h3>列表进入、离开、排序过渡</h3>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <button @click="shuffle">Shuffle</button>
      <transition-group
        :class="$style.list"
        tag="div"
        move-class="transition-move"
        enter-active-class="list-move animated fadeInUp"
        leave-active-class="list-move animated fadeOutDown list-leave-active"
      >
        <span v-for="item in items" :key="item" :class="$style['list-item']">{{item}}</span>
      </transition-group>
    </div>
    <div>
      <h3>table过渡</h3>
      <button @click="shuffleCells">shuffle</button>
      <transition-group
        :class="$style.box"
        tag="div"
        move-class="transition-move"
      >
        <div :class="$style.cell" v-for="cell in cells" :key="cell.id">
          {{cell.num}}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import shuffle from '../utils/shuffle';

  export default {
    name: 'transition-page',
    data() {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
        cells: (new Array(81).fill(0)).map((_, index) => {
          return {
            id: index,
            num: (index % 9) + 1,
          };
        }),
      };
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random() * this.items.length);
      },
      add() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove() {
        this.items.splice(this.randomIndex(), 1);
      },
      shuffle() {
        this.items = shuffle(this.items);
      },
      shuffleCells() {
        this.cells = shuffle(this.cells);
      },
    },
  };
</script>

<style lang="scss" module>
  .list {
    font-size: 20px;
    line-height: 1.5;
    position: relative;
    text-align: left;
    margin-top: 20px;
    padding-left: 40px;

    &-item {
      display: inline-block;
      margin-right: 8px;
    }
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 25px * 9;
    margin: 20px auto 0;
  }

  .cell {
    display: flex;
    width: 25px;
    height: 25px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
  }
</style>

<style lang="scss">
  .list-leave-active {
    position: absolute;
  }

  .transition-move {
    transition: all 0.5s;
  }
</style>
