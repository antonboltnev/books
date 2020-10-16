<template>
  <div class='ProductItem'>
    <ui-grid class="wrap-reverse justify-center">
      <ui-grid-col
        size-w-lg=75
        size-w-md=75
        size-w-sm=50
      >
        <h3 class="ProductItem__title" @click="$emit('book-clicked', bookData)">
          {{ bookIndex + 1 }}.&nbsp;{{ bookData.title }}&nbsp;
          <span class="title__rating small-text">({{ bookData.rating }} / 10)</span>
        </h3>
        <span class="ProductItem__author small-text">
      {{ bookData.author }}
    </span>
        <div class="ProductItem__synopsis">
          {{ bookData.synopsis }}
        </div>
        <div class="ProductItem__upvote">
          <ui-grid class="align-center">
            <ui-grid-col
              size-w-lg=25
              size-w-md=33
              size-w-sm=50
              size-w-xs=50
            >
              <ui-btn
                :outline="bookData.upvoted"
              >
                <span>{{ bookData.upvoted ? 'Upvoted' : 'Upvote' }}</span>
              </ui-btn>
            </ui-grid-col>
            <ui-grid-col size-w="50">
              <span class="upvote__counter small-text">Upvoted {{ bookData.upvotes }} times</span>
            </ui-grid-col>
          </ui-grid>
        </div>
      </ui-grid-col>
      <ui-grid-col
        size-w-lg=25
        size-w-md=25
        size-w-sm=50
        @click="$emit('book-clicked', bookData)"
      >
        <img class="ProductItem__img" :src="bookData.cover" alt="">
      </ui-grid-col>
    </ui-grid>
  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    props: {
      bookData: {
        type: Object,
        default: () => {}
      },
      bookIndex: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="scss">
  .ProductItem {
    margin: 0 -30px;
    padding: 15px;

    &__title {
      color: #b38b3a;
      cursor: pointer;

      .title {
        &__rating {
          color: #2D2D2D;
          font-weight: lighter;
        }
      }
    }

    &__author {
      color: #3f3f3f;
      font-style: italic;
    }

    &__synopsis {
      margin: $paddingContainer*2 0;
      line-height: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    &__img {
      cursor: pointer;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 11px 1px #909090;
    }
  }
</style>
