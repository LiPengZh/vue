<template lang="html">
  <div class="row">
     <app-quate v-on:click.native="deleteQuate(value)" v-for="(item,value) in quotes">{{item}}</app-quate>  
  </div>
</template>
<script>
import Quate from './quate.vue'
export default {
    props:["quotes"],
    components:{
        "appQuate":Quate
    },
    methods:{
      deleteQuate:function(index){
        this.$emit('del',index)
      } 
    }
}
</script>


<style>

</style>




