<template>
  <div class="transition-page">
    <div>
      <h3>普通过渡</h3>
      <button @click="show = !show">
        Toggle
      </button>
      <br>
      <p style="text-align: left;position: relative;height: 20px;">
        <transition-component>
          <button v-if="show" :class="$style.btn" key="aaa">AAA</button>
          <button v-else :class="$style.btn" key="bbb">BBB</button>
        </transition-component>
      </p>
    </div>
    <div>
      <h3>动态过渡</h3>
      <button v-if="stop" @click="startScroll">
        Start
      </button>
      <button v-else @click="stopScroll">
        Stop
      </button>
      <button @click="scrollPrev">prev</button>
      <button @click="scrollNext">next</button>
      <br>
      <p style="text-align: left;position: relative;height: 20px;">
        <transition
          :enter-active-class="enterActiveClass"
          :leave-active-class="leaveActiveClass"
          @after-enter="afterEnter"
        >
          <button v-for="(item, i) in items" v-if="i === index" :key="item" :class="$style.btn">
            {{ item }}
          </button>
        </transition>
      </p>
    </div>
    <div>
      <h3>列表进入、离开、排序过渡</h3>
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <button @click="shuffle">Shuffle</button>
      <transition-component
        is-group
        :class="$style.list"
        tag="div"
      >
        <span v-for="item in items" :key="item" :class="$style['list-item']">{{item}}</span>
      </transition-component>
    </div>
    <div>
      <h3>table过渡</h3>
      <button @click="shuffleCells">shuffle</button>
      <transition-component
        is-group
        :class="$style.cell"
        tag="div"
      >
        <div :class="$style['cell-item']" v-for="cell in cells" :key="cell.id">
          {{cell.num}}
        </div>
      </transition-component>
    </div>
  </div>
</template>

<script>
  import classNames from 'classnames';
  import shuffle from '../utils/shuffle';
  import TransitionComponent from '../components/TransitionComponent';

  export default {
    name: 'transition-page',
    components: {
      TransitionComponent,
    },
    data() {
      return {
        show: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
        cells: (new Array(81).fill(0)).map((_, index) => {
          return {
            id: index,
            num: (index % 9) + 1,
          };
        }),
        index: 0,
        stop: true,
        direction: 'left',
      };
    },
    methods: {
      afterEnter() {
        if (!this.stop) {
          this.scrollNext();
        }
      },
      startScroll() {
        this.stop = false;
        this.scrollNext();
      },
      stopScroll() {
        this.stop = true;
      },
      scrollNext() {
        this.direction = 'left';
        this.index = (this.index + 1) % this.items.length;
      },
      scrollPrev() {
        this.direction = 'right';
        const len = this.items.length;
        this.index = ((this.index + len) - 1) % len;
      },
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
    computed: {
      enterActiveClass() {
        return classNames('animated', {
          fadeInRight: this.direction === 'left',
          fadeInLeft: this.direction === 'right',
        });
      },
      leaveActiveClass() {
        return classNames('animated', {
          fadeOutLeft: this.direction === 'left',
          fadeOutRight: this.direction === 'right',
        });
      },
    },
  };
</script>

<style lang="scss" module>
  .btn {
    position: absolute;
    display: inline-block;
  }

  .list {
    font-size: 20px;
    line-height: 1.5;
    position: relative;
    text-align: left;
    margin-top: 20px;

    &-item {
      display: inline-block;
      margin-right: 8px;
    }
  }

  .cell {
    display: flex;
    flex-wrap: wrap;
    width: 25px * 9;
    margin: 20px auto 0;

    &-item {
      display: flex;
      width: 25px;
      height: 25px;
      justify-content: space-around;
      align-items: center;
      border: 1px solid #aaa;
      margin-right: -1px;
      margin-bottom: -1px;
    }
  }

</style>

<style lang="scss">
  .transition-move {
    transition: all 0.5s;
  }
</style>
