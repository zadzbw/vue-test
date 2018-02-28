<template>
  <div :class="$style.test">
    <input type="text" :value="foo" @input="emitInput" placeholder="foo">
    <input
      type="text"
      placeholder="bar"
      :value="bar"
      @input="$emit('update:bar', $event.target.value)"
    >
    <p>foo: {{foo}}</p>
    <p>bar: {{bar}}</p>
  </div>
</template>

<script>
  export default {
    props: ['foo', 'bar'],
    model: {
      prop: 'foo',
      event: 'custom-input',
    },
    name: 'test-component',
    mounted() {
    },
    methods: {
      emitInput(e) {
        this.$emit('custom-input', e.target.value);
      },
    },
  };
</script>

<style lang="scss" module>
  .test {
    display: block;
  }
</style>
