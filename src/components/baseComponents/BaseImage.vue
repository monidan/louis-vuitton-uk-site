<template>
  <div>
    <img class='lv-image' :src="source" :alt="description">
  </div>
</template>
<script>
export default {
  name: 'BaseImage',
  props: {
    source: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss">
  
</style>