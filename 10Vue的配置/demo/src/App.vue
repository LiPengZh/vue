<template>
    <div class="container">
          <app-header></app-header>
    <hr>




      <app-footer></app-footer>
</template>

<script>
import Herader from './Header.vue'
import Footer  from './Footer.vue'
export default {
    components:{
      "app-header": Herader,
       "app-footer": Footer
    }
}
</script>

<style>

</style>
