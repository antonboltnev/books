<template>
  <div
    class='UiBtn'
    :class=" ['UiBtn__' + variant, outline ? 'UiBtn__outline' : '' ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "UiBtn",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      outline: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: "Primary"
      }
    }
  }
</script>

<style lang="scss">
  .UiBtn {
    padding: 5px 10px;
    background: #b38b3a;
    color: #ffffff;
    border-radius: 5px;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: #cba33b;
    }

    &__outline {
      background: none;
      border: solid 3px #b38b3a;
      color: #b38b3a;

      &:hover {
        background: rgba(185, 147, 55, 0.3);
      }
    }

  }
</style>
