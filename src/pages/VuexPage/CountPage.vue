<template>
  <div>
    <p>state-count: {{count}}</p>
    <p>getters-countPlus5: {{countPlus5}}</p>
    <p>getters-countPlus10: {{countPlus10}}</p>
    <p>computed-countPlus15: {{countPlus15}}</p>
    <p v-if="pending">pending</p>
    <p v-else>done</p>
    <button @click="increase">increase</button>
    <button @click="increaseWithMount({ amount: 5 })">increase5</button>
    <button @click="decrease">decrease</button>
    <button @click="increaseAsync">increase async</button>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import { COUNT } from '../../vuex/actionTypes';

  const { mapState, mapGetters, mapMutations } = createNamespacedHelpers('count');

  export default {
    name: 'count-page',
    mounted() {
    },
    data() {
      return {
        pending: false,
      };
    },
    computed: {
      countPlus15() {
        return this.count + 15;
      },
      ...mapState({
        count: state => state.value,
      }),
      ...mapGetters([
        'countPlus5',
        'countPlus10',
      ]),
    },
    methods: {
      ...mapMutations({
        increase: COUNT.INCREASE_COUNT,
        decrease: COUNT.DECREASE_COUNT,
        increaseWithMount: COUNT.INCREASE_COUNT_WITH_AMOUNT,
      }),
      async increaseAsync() {
        this.pending = true;
        try {
          const data = await this.$store.dispatch(`count/${COUNT.INCREASE_COUNT_ASYNC}`);
          console.log(data);
          this.pending = false;
        } catch (err) {
          console.log(err);
          this.pending = false;
        }
      },
    },
  };
</script>

<style lang="scss">

</style>
