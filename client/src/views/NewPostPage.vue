<template>
  <div id="post-page">
    <input type="text" placeholder="Title.." class="title" v-model="post.title">
    <textarea name="description" id="post-description" placeholder="Description.." v-model='post.description' cols="30" rows="10"></textarea>
    <div class="button">
      <button @click="addPost">Submit</button>
      <button @click="goBack">Go back</button>
    </div>
  </div>
</template>
<script>
import PostsService from '../services/PostsService'

export default {
  name: 'NewPost',
  data() {
    return {
      post: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    async addPost() {
      if(this.post.title !== '' && this.post.description !== ''){
        await PostsService.addNewPost({
          title: this.post.title,
          description: this.post.description
        })
        this.$router.push({name: 'Posts'})
      } else {
        alert('Empty fields!')
      }
    },
    goBack() {
      this.$router.push({name: 'Posts'})
    }
  },
}
</script>
<style lang="scss">
  #post-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > *:not(div) {
      margin: .7rem 0;
      border: 1px solid black;
      padding: .5rem 1rem;
    }

    & div button{
      margin: .5rem;
      border: 1px solid black;
      padding: .5rem 1rem;
    }
  }
</style>