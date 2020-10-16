<template>
  <ui-top-link name="Catalogue"/>
  <ui-card class="BookPage" v-if="dataLoaded">
    <ui-grid class='justify-center'>
      <ui-grid-col size-w="100">
        <ui-grid class="BookPage__title align-end">
          <ui-grid-col size-w-md="66">
            <h1 class="primary">{{bookInfo.title}}</h1>
            <span class="grey-italic small-text">{{bookInfo.author}}</span>
          </ui-grid-col>
          <ui-grid-col size-w-md="33">
            <ui-grid class="align-center">
              <ui-grid-col size-w="60">
                <span>Upvoted {{ bookInfo.upvotes }} times</span>
              </ui-grid-col>
              <ui-grid-col size-w="40">
            <span>
              <ui-btn
                :outline="bookInfo.upvoted"
              >
                <span>{{ bookInfo.upvoted ? 'Upvoted' : 'Upvote' }}</span>
              </ui-btn>
            </span>
              </ui-grid-col>
            </ui-grid>
          </ui-grid-col>
        </ui-grid>
      </ui-grid-col>
      <ui-grid-col size-w="100">
        <div class='BookPage__cover ui-ta_center'>
          <img :src="bookInfo.cover" alt="">
        </div>
      </ui-grid-col>
      <ui-grid-col class="BookPage__synopsis" size-w="100">
        <p class="big-text bold-text">Synopsis</p>
        <p>{{bookInfo.synopsis}}</p>
        <p class="bold-text">Rating: {{ bookInfo.rating }} / 10</p>
      </ui-grid-col>
      <ui-grid-col class="BookPage__comment-section" size-w="100">
        <div class="existing-comments">
          <p class="big-text bold-text">Comments: {{bookInfo.comments.length}}</p>
          <div>
            <p
              class="comment-content"
              v-for="(comment, index) in bookInfo.comments"
              :key="index"
            >
              <span>{{comment.text}}</span>
              <span class="content__date small-text">{{comment.date}}</span>
            </p>
          </div>
          <div class="ui-ta_center" v-if="!bookInfo.comments.length">
            <span>Unfortunately, there are no comments for this book yet ...</span>
          </div>
        </div>
        <div class="comment-section__add">
          <p>White comment text below</p>
          <textarea v-model="newComment"/>
          <ui-grid>
            <ui-grid-col size-w="33">
              <ui-btn @click="addNewComment">
                <span>Add</span>
              </ui-btn>
            </ui-grid-col>
          </ui-grid>
        </div>
      </ui-grid-col>
    </ui-grid>
  </ui-card>
</template>

<script>
  import store from "../globalStore"
  import router from "../router/router"

  import { onMounted, ref } from "vue"
  export default {
    name: "BookPage",
    setup() {
      const { fetchExactBook, addComment } = store;

      let dataLoaded = ref(false);
      let bookInfo = ref({});
      let newComment = ref(null);

      onMounted(() => {
        fetchExactBook(router.currentRoute.value.query.slug)
        .then(res => {
          bookInfo.value = res;
          dataLoaded.value = true;
        })
      });

      function addNewComment() {
        addComment({ comment: newComment.value, slug: bookInfo.value.slug })
      }

      return {
        router,
        dataLoaded,
        bookInfo,
        newComment,
        addNewComment
      }
    }
  }
</script>

<style lang="scss">
  .BookPage {
    background: #f1f1f1;
    &__title {
      h1 {
        margin-bottom: 5px;
      }
    }
    &__cover {
      img {
        border-radius: 10px;
      }
    }
    &__synopsis {
      line-height: 24px;
      margin-bottom: 30px;
      p {
        margin-bottom: 30px;
      }
    }
    &__comment-section {
      .existing-comments {
        min-height: 100px;
      }
      .comment-content {
        position: relative;
        padding: 15px;
        border: solid 1px #cccccc;
        border-radius: 5px;
      }
      .content {
        margin-top: 60px;
        &__date {
          position: absolute;
          bottom: -20px;
          right: 0;
        }
      }
      textarea {
        padding: 15px;
        color: #2D2D2D;
        font-size: 16px;
        appearance: none;
        border-radius: 10px;
        border: solid 1px #e7e7e7;
        min-height: 100px;
        min-width: 100%;
        max-width: 100%;
        -webkit-tap-highlight-color: transparent;
        outline: none;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .BookPage {
      &__cover {
        img {
          width: 100%;
        }
      }
    }
  }
</style>
