<template>
  <div class="u-header">
    <nav>
      <ul class="u-header-list">
        <li class="u-header-list__item">Sign up</li>
        <li class="u-header-list__item">Sign in</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .u-header {
    background-color: #5effcd;
    width: 100vw;
  }
  .u-header-list {
    margin: 0;
    list-style: none;
    text-align: right;
    color: white;
    font-size: 1.5em;
  }
  .u-header-list__item {
    display: inline-block;
    margin: 0.5em 0.5em 0.5em 0.5em;
  }
</style>