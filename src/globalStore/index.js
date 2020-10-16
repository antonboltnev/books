import { reactive, readonly } from "vue";
import axios from "axios"

const state = reactive({
  books: []
});

const baseUrl = process.env.VUE_API_BASE_URL

const fetchBooks = function () {
  return axios.get(baseUrl + "/books")
    .then(res => {
      state.books = res.data.books;
      return res.data
    })
}

const fetchExactBook = function (slug) {
  return axios.get(baseUrl + "/books/" + slug)
    .then(res => {
      return res.data;
    })
};

const addComment = function ({comment, slug}) {
  let newComment = {
    text: comment,
    date: new Date().toLocaleDateString()
  }
  return axios.put(baseUrl + "/books/" + slug + "/comments", newComment)
    .then(res => {
      return res
    })
}

export default { state: readonly(state), fetchBooks, fetchExactBook, addComment };

