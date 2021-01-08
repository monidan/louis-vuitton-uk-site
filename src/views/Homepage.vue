<template>
  <div id='lv-homepage'>
    <NewCollections />
    <ItemsSuggestions />
    <Presents />
  </div>
</template>
<script>
  import NewCollections from '@/components/NewCollections.vue'
  import ItemsSuggestions from '@/components/ItemsSuggestions.vue'
  import Presents from '@/components/Presents.vue'

  export default {
    name: 'Homepage',
    components: {
      NewCollections,
      ItemsSuggestions,
      Presents
    }
  }
</script>
<style lang="scss">
  
</style>