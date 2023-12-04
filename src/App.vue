<script>
import heder_vue from '../src/components/heder.vue';
import cuadrolog from '../src/components/cuadrolog.vue';
import footer_vue from '../src/components/footer.vue';

export default { 
  components: {
    heder_vue,
    cuadrolog,
    footer_vue,
  },
}
</script>

<template>
<heder_vue></heder_vue>
<RouterView></RouterView>
<footer_vue></footer_vue>
</template>

<style scoped>

</style>
