<template>
    <div id="app">
      <Header country='Украина'/>
      <router-view></router-view>
      <Footer country="Украина"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap');

  html{
    min-height: 100%;
  }

  body{
    margin: 0;
    padding: 0;

    font-family: 'Raleway', sans-serif;
    letter-spacing: .05rem;
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
