<template>
  <div>
    <h2>{{ context }}</h2>
    <p>{{ text }}</p>
  </div>
</template>
<script>
  export default {
    props: ['context','text']
  }
</script>