<template>
  <div class="container">
    <template v-for="article in data.contents" :key="article.id">
      <post class="post-wrapper" :post="article" />
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
* {
  font-family: "Yu Mincho", "YuMincho", "游明朝体", "游明朝", "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  color: rgb(166, 166, 166);
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
}

li {
  list-style: none;
}

.post-wrapper {
  margin: 0 20px;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
