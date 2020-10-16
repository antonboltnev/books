<template>
  <div class='UiTopLink'>
    <div @click="$router.push({name: $props.name})" class="link-wrapper row align-center">
      <span><i class="material-icons">keyboard_arrow_left</i></span>
      <span class="link">Back to {{name}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "UiTopLink",
    props: {
      name: {
        type: String,
        default: 'HomePage'
      }
    }
  }
</script>

<style lang="scss"></style>
