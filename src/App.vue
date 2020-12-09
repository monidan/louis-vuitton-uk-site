<template>
  <div id="app">
    <Header country='Украина'/>
  </div>
</template>

<script>
// import PageWrapper from './components/PageWrapper.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap');

  body{
    margin: 0;
    padding: 0;

    font-family: 'Raleway', sans-serif;
  }
  a{
    text-decoration: none;
    color: black;
  }
  ul{
    display: flex;
    padding: 0;
    margin: 0;
    
    li{
      list-style-type: none;
    }
  }
</style>
