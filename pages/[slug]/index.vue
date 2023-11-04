<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/blogs/${slug}`, {
  baseURL: "https://togoblog.microcms.io/api/v1/",
  headers: {
    "X-MICROCMS-API-KEY": "3ldJO9kyxU5kMMN3uYZ7vt22eJqWENFOh4g6",
  },
});
</script>

<template>
  <main class="main">
    <h1 class="title">{{ article.title }}</h1>
    <p class="publishedAt">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div class="body">
      <div class="post" v-html="article.content" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 60%;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

:deep(.post) {
  > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }

  > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }
}
</style>
