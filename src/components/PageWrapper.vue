<template>
  <div class="wrapper"> 
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'Wrapper',
}
</script>

<style scoped lang='scss'>
  .wrapper{
    max-width: 95%;
    margin: 0 auto;
  }
</style>
