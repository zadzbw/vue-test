<template>
  <div class="divider-page">
    <h2>This is divider page</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider divider-color="red"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider dashed/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider>
      <template slot="content">with text</template>
    </divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider content-color="rgba(255, 0, 0, 0.75)">
      <template slot="content">with colored text</template>
    </divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <divider dashed divider-color="blue" content-color="#42b983">
      <template slot="content">dashed and with text</template>
    </divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <h4>
      垂直divider
    </h4>
    <div class="vertical-test">
      <span>Text1</span>
      <divider type="vertical"/>
      <span>Text2</span>
      <divider type="vertical" divider-color="red"/>
      <span>Text3</span>
      <divider type="vertical" dashed/>
      <span>Text4</span>
      <divider type="vertical" dashed divider-color="red"/>
      <span>Text5</span>
    </div>
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

  .vertical-test {
    font-size: 14px;
  }
</style>
