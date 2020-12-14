<template>
  <div class="lv__presents">
    <div class="lv__presents__women">
      <a href="#">
        <img src="../assets/women__presents.webp" alt="Подарки для неё">
        <h2>Подарки для неё</h2>
      </a>
    </div>
    <div class="lv__presents__collection">
      <a href="#">
        <img src="../assets/presents__collection.webp" alt="Принцесса олимпия греческая представляет коллекцию CAPUCINES">
        <h2>Принцесса олимпия греческая представляет коллекцию CAPUCINES</h2>
      </a>
    </div>
    <div class="lv__presents__men">
      <a href="#">
        <img src="../assets/presents__men.webp" alt="Подарки для него">
        <h2>Подарки для него</h2>
      </a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Presents',
}
</script>
<style lang="scss">
  .lv__presents{
    display: grid;
    grid-template: auto / repeat(3, calc(100% / 3));

    div {
      height: 100%;
      padding: 5%;
      min-height: 30rem;
      text-align: center;
      text-transform: uppercase;

      a{
        display: block;
        width: 100%;
        height: 100%;
      }

      img{
        max-width: 100%;
      }

      h2{
        padding: 2.5rem;
        font-size: 1.45rem;
      }
    }

    &__collection{
      box-shadow: inset 1px 0 0 0 #eae8e4,
                  inset -1px 0 0 0 #eae8e4;
    }
  }
</style>