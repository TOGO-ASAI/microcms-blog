<script setup>
const route = useRoute();
const slug = route.params.slug;
const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseUrl;
const apiKey = runtimeConfig.public.apiKey;
const article = ref({});
onMounted(async () => {
  console.log(baseURL);
  console.log(apiKey);

  const { data, error } = await useFetch(`/blogs/${slug}`, {
    baseURL: baseURL,
    headers: {
      "X-MICROCMS-API-KEY": apiKey,
    },
  });
  article.value = data.value;
  if (error.value) {
    console.error("Fetch error:", error.value);
  }
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
* {
  color: white;
}

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
