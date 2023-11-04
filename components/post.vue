<template>
  <nuxt-link :to="`/${post.id}`">
    <!-- <v-img :src="post.image.url" alt="post image" height="200"></v-img> -->
    <v-card-title>{{ post.title }}</v-card-title>
  </nuxt-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style>
/* Add your custom styles here */
</style>
