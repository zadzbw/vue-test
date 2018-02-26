<template>
  <div class="divider-page">
    <h2>This is divider page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider>
      <template slot="content">with text</template>
    </divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider dashed/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<script>
  import Divider from '../components/Divider/Divider';

  export default {
    components: {
      Divider,
    },
    mounted() {
    },
  };
</script>

<style lang="scss">
  .divider-page {
    /*font-size: 20px;*/
  }
</style>
