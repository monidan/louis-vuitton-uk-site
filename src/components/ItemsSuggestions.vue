<template>
  <div class="lv__items">
    <div class="lv__items__collections">
      <a href="#">
        <div class="lv__items__collections__img">
          <img src="../assets/collections__lv.jpg" alt="Peggy Gu collection">
        </div>
        <div class="lv__items__collections__title">
          <h2>Коллекция обуви Весна-Лето 2021</h2>
          <p>Пегги Гу представляет новую коллекцию</p>
        </div>
      </a>
    </div>
    <div class="lv__items__delivery">
      <a href="#">
        <h2>Доставка в удобное время</h2>
        <p>Новый сервис для Киева</p>
        <a href="#" class="lv__items__delivery__button">
          Подробнее
        </a>
      </a>
    </div>
    <div class="lv__items__parfume">
      <a href="#">
        <div class="lv__items__parfume__img">
          <img src="../assets/parfume__lv.jpg" alt="HEURSES parfume">
        </div>
        <div class="lv__items__parfume__title">
          <h2>ПАРФЮМ HEURES D’ABSENCE</h2>
        </div>
      </a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ItemsSuggestions',

}
</script>
<style lang="scss">
  .lv__items{
    display: grid;
    grid-template: repeat(2, 50%) / repeat(2, 50%);
    box-shadow: inset 0 1px 0 0 #eae8e4,
                inset 0 -1px 0 0 #eae8e4;

    div > a{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & > div{
      padding: 5%;

      h2{
        text-transform: uppercase;
        font-size: 1.85rem;
        letter-spacing: 1.8px;
      }

      img{
        max-width: 100%;
      }
    }

    &__collections{
      grid-row: 1/3;
      box-shadow: inset -1px 0 0 0 #eae8e4;

      &__title{
        padding: 3rem 0 .5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
          padding-bottom: 1rem;
        }

        p{
          font-weight: 300;
          font-size: .90rem;
        }
      }
    }

    &__delivery{
      box-shadow: inset 0 -1px 0 0 #eae8e4;
      display: flex;
      align-items: center;
      justify-content: center;

      & > a{
        row-gap: 1.2rem;
        justify-items: center;
      }

      p{
        font-size: .9rem;
        font-weight: 300;
      }

      &__button{
        font-size: .85rem;
        font-weight: 500;

        width: 16rem;
        border: 1px solid #19110b;
        text-align: center;
        padding: 1rem .5rem;
        color: white;
        background-color: #19110b;

        transition: all .3s ease-in-out;

        &:hover{
          background-color: rgba(#19110b, .9);
          border-color: rgba(black, .9);
        }
      }
    }

    &__parfume{
      
      h2{
        padding: 3rem 0 .5rem;
      }
    }
  }
</style>