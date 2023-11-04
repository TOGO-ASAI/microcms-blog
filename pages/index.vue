<template>
  <div>
    <template v-for="article in data.contents" :key="article.id">
      <post :post="article" />
    </template>
  </div>
</template>

<script setup>
const baseURL = "https://togoblog.microcms.io/api/v1/";
const { data } = await useFetch("/blogs", {
  baseURL,
  headers: {
    "X-MICROCMS-API-KEY": "3ldJO9kyxU5kMMN3uYZ7vt22eJqWENFOh4g6", //環境変数にする
  },
});
</script>

<script>
import Post from "@/components/post.vue";

export default {
  components: {
    Post,
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
