<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./packs/compoents/header";
  export default {
    name: 'App',
    components: { Header },
  };
</script>
<style>
  #app {
    margin: 0% 20% 0 20%;
  }
</style>
