<template>
    <div id="app">
      <Header country='Украина'/>
        <router-view class="lv-view"></router-view>
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
  mounted() {
    const {height} = window.getComputedStyle(this.$el.querySelector('.header__inner'), null);
    

    const header = this.$el.firstElementChild;
    header.style.height = height;
  }
}
</script>