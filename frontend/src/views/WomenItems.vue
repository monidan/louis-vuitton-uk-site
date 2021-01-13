<template>
  <div id="lv-women-clothes">
    <div class="lv-filters-bar">
      <div class="lv-filters-bar__title">
        <h3>Одежда Для Женщин</h3>
      </div>
      <div class="lv-smart-link__online-purchase">
        <a href="#">
          Купить Онлайн
        </a>
      </div>
      <div class="lv-filters-bar__main-button">
        <!-- svg icon -->
        <a href="#">
          Фильтры
        </a>
      </div>
    </div>
    <div class="lv-filters">
      <div class="lv-filters__categories">
        <h3>Категории</h3>
        <BaseNavBar :navItems='categories'/>
      </div>
      <div class="lv-filters__colours">
        <h3>Цвет</h3>
        <ul>
            <li v-for="image in images"
                :key='image.description'>
              <BaseImage :source='image.source' />
              <!-- fill images array -->
            </li>
        </ul>
      </div>
      <div class="lv-filters__close-button">
        <!-- svg icon -->
        <p>Скрыть Фильтры</p>
      </div>
    </div>
    <div class="lv-women-clothes">
      <BaseClothesList />
    </div>
  </div>
</template>
<script>
  import BaseNavBar from '../components/baseComponents/BaseNavBar'
  import BaseImage from '../components/baseComponents/BaseImage'
  import BaseClothesList from '../components/baseComponents/BaseClothesList'


  export default {
    name: 'WomenClothes',
    components: {
      BaseNavBar,
      BaseImage,
      BaseClothesList
    },
    data() {
      return {
        categories: [
          {name: 'Аксессуары', link: '#'},
          {name: 'Изделия из Кожи', link: '#'},
          {name: 'Одежда', link: '#'},
          {name: 'Обувь', link: '#'}
        ],
        images: [{
          source: '',
          description: ''
        }]
      }
    }
  }
</script>
<style lang="scss">
  
</style>