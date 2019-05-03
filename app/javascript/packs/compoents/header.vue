<template>
  <div class="p-header">
    <nav>
      <ul class="c-header-list">
        <li class="c-header-item">Sign up</li>
        <li class="c-header-item">Sign in</li>
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
  .p-header {
    background-color: #5effcd;
    width: 100vw;
  }
  .c-header-list {
    margin: 0;
    list-style: none;
    text-align: right;
    color: white;
    font-size: 1.5em;
  }
  .c-header-item {
    display: inline-block;
    margin: 0.5em 0.5em 0.5em 0.5em;
  }
</style>