<template>
  <li :class="styleA.user">
    <span>{{user.name}}</span> --- <span>{{user.age}}</span>
    <slot name="length" :len="nameLength"/>
  </li>
</template>

<script>
  export default {
    name: 'user',
    props: ['user'],
    computed: {
      nameLength() {
        return this.user.name.length;
      },
    },
  };
</script>

<style lang="scss" module="styleA">
  .user {
    font-size: 24px;
    flex-shrink: 0;
    list-style: none;
    padding: 4px 7px;
    color: #29b7ad;
  }
</style>
