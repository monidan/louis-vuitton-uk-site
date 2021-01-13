<template>
  <div id="posts">
    <ol>
      <li v-for="post in posts"
          :key="post.title"
      >
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </li>
    </ol>
  </div>
</template>
<script>
import PostServices from '../services/PostsService'

export default {
  name: 'PostPage',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const response = await PostServices.fetchPosts();
      this.posts = response.data.posts;
    }
  },
  mounted() {
    this.getPosts();
  }
}
</script>
<style lang="scss">
  #posts{
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 2rem 0
  }
</style>