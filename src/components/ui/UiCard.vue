<template>
  <div class='UiCard'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "UiCard"
  }
</script>

<style lang="scss">
  .UiCard {
    box-shadow: 0 0 5px 0px #cccccc;
    border-radius: 5px;
    padding: $paddingContainer*2;
  }
</style>
