<template>
  <div class='Catalogue' v-if="dataLoaded">
    <ui-top-link name="HomePage"/>
    <ui-card>
      <h1 class="Catalogue__title ui-ta_center">Top books of all time</h1>
      <ui-grid class="justify-center">
        <ui-grid-col
          size-w-lg="50"
          size-w-md="50"
          size-w-sm="75"
          size-w-xs="auto"
        >
          <ui-textfield
            v-model="query"
            placeholder="Search books ..."
            @search="searchBooks(query)"
            @clear="searchBooks(null)"
          />
        </ui-grid-col>
      </ui-grid>
      <p
        class="ui-ta_center"
        v-if="!localBooks.length"

      >
        <span>No books found ....</span><br>
        <img width="200" :src="require( '../assets/images/travolta_search.gif' )" alt="">
      </p>
      <ProductItem
        v-for="(item, index) in localBooks"
        :key="item.slug"
        :book-data="item"
        :book-index="index"
        @book-clicked="toBookPage"
      />
    </ui-card>
  </div>
</template>

<script>
  import UiTextfield from "./ui/UiTextfield";
  import ProductItem from "./ProductItem";

  import store from "../globalStore"

  import { onMounted, ref } from "vue"
  import router from "../router/router";

  export default {
    name: "Catalogue",
    components: {
      UiTextfield,
      ProductItem
    },
    setup() {
      const { fetchBooks } = store;
      let dataLoaded = ref(false)
      let localBooks = ref();

      onMounted(() => {
        fetchBooks()
        .then(res => {
          localBooks.value = res.books;
          dataLoaded.value = true;
        })
      });

      function toBookPage(book) {
        router.push({ name: 'BookPage', query: {'slug': book.slug} })
      }

      function Search() {
        let query = ref();

        function searchBooks(value) {
          if (!value) {
            localBooks.value = store.state.books;
            query.value = null
          }
          else localBooks.value = store.state.books.filter(item => item.title.toLowerCase().includes(query) ||
            item.synopsis.toLowerCase().includes(value))
        }

        return {
          query,
          searchBooks
        }
      }

      return {
        fetchBooks, dataLoaded, localBooks, toBookPage, ...Search()
      }
    }
  }
</script>

<style lang="scss">
  .Catalogue {
    &__title {
      color: #ddaa43;
    }

    .ProductItem:nth-child(odd) {
      background: #b38c3917;
    }
  }
</style>
