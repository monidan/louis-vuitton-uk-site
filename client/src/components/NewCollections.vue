<template>
  <div class="lv__collections">
    <div class="lv__collections__panoramic__picture">
      <img src="../assets/panomaric__image__lv.jpg" 
        alt="Louis Vuitton НОВОГОДНЯЯ КОЛЛЕКЦИЯ ПОДАРКОВ ДЛЯ НЕЁ - Кампания «Путешествие домой» при участии Алисии Викандер">
    </div>
    <div class="lv__collections__title">
      <h1>НОВОГОДНЯЯ КОЛЛЕКЦИЯ ПОДАРКОВ ДЛЯ НЕЁ</h1>
      <div class="lv__collections__title__body">
        <p>Кампания "Путешествие домой" при участии Алисии Викандер</p>
        <div class="lv__collections__title__body__buttons">
          <a class="lv__collections__about__company" href="#">Познакомиться с кампанией</a>
          <a class="lv__collections__choose__present" href="#">Выбрать подарок</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Collections',  
}
</script>
<style lang="scss">
  .lv__collections{
    width: 100%;
    text-align: center;

    &__panoramic__picture{
     width: 100%;
     overflow: hidden;
     max-height:30rem;

     img{
       object-fit: cover;
       width: 100%;
       height: 100%;
     }
    }

    &__title{
      padding: 4rem 0;

      h1{
        font-size: 1.85rem;
        padding-bottom: 1rem;
      }

      &__body{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        font-size: .80rem;
        font-weight: 300;

        p{
          font-size: .85rem;
        }

        &__buttons{
          display: flex;
          justify-content: center;
          column-gap: .5rem;

          a{
            display: inline-block;
            width: 15.5rem;
            padding: 1rem 0;
            border: 1px solid black;
            box-sizing: border-box;
            margin: auto 0;
            font-weight: 500;

            &:first-child{
              color: white;
              background-color: #19110b;
              transition: all .3s ease-in-out;

              &:hover{
                background-color: rgba(#19110b, .9);
                border-color: rgba(black, .9);
              }
            }

            &:last-child{
              transition: all .3s ease-in-out;

              &:hover{
                background-color: rgba(grey, .1);
                border-color: rgba(black, .9);
              }
            }

            &:last-child:active{
              background-color: #eae8e4;
            }
          }
        }
      }
    }
  }
</style>