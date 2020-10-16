<template>
  <div class='Page'>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Page"
  }
</script>

<style lang="scss">
  .Page {
    max-width: 900px;
    margin: 0 auto;
  }
</style>
