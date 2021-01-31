<template>
  <div id="lv-women-clothes">
    <div class="lv-filters-bar">
      <page-wrapper class="lv-filters-bar__inner">
        <div class="lv-filters-bar__title">
          <h3>Одежда Для Женщин</h3>
        </div>
        <div class="lv-filters-bar__buttons">
          <div class="lv-smart-link__online-purchase">
            <!-- TODO: CHECKBOX TOGGLE HANDLER -->
            <a href="#">
              <v-checkbox
              label="Купить онлайн"
              class="lv-checkbox"
              >
              </v-checkbox>
            </a>
          </div>
          <div class="lv-filters-bar__main-button">
            <a href="#">
              <v-icon>
                mdi-tune
              </v-icon>
              Фильтры
            </a>
          </div>
        </div>
      </page-wrapper>
    </div>
    <div class="lv-filters" v-if="isFiltersShowing">
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
  </div>
</template>
<script>
  import BaseNavBar from '../components/baseComponents/BaseNavBar'
  import BaseImage from '../components/baseComponents/BaseImage'
  import PageWrapper from '../components/PageWrapper.vue'

  export default {
    name: 'WomenClothes',
    components: {
      BaseNavBar,
      BaseImage,
      PageWrapper
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
        }],
        isFiltersShowing: false
      }
    }
  }
</script>
<style lang="scss">
  #lv-women-clothes{
    flex-grow: 1;
    display: flex;

    flex-direction: column;

    .lv-filters-bar{
      font-size: .9rem;
      box-shadow: inset 0 -1px 0 0 #eae8e4;

      &__inner{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &__buttons{
        display: flex;
        align-items: center;
        
        .lv-smart-link__online-purchase{
          a{
            border-left: 1px solid #eae8e4;
            border-right: 1px solid #eae8e4;
            padding-right: 1.5rem;
          }
        }

        & a{
          display: inline-block;
          padding: 2rem 0;  
          padding-left: 1.5rem;
        }
      }
    }
  }

  // vuetify styles overriding

  .v-input{
    margin: 0!important;
    padding: 0!important;

    .v-label{
      color: black!important;;
      font-size: .9rem;
      margin-left: .2rem;
    }

    &__slot{
      margin: 0!important;
    }

    .v-input--selection-controls__ripple{
      display: none;
    }

    .v-messages{
      display: none;
    }
  }
</style>