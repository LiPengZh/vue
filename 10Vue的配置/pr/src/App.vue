<template>
  <div class="container">
    <geader :max="max" :current="quotes.length"> 
          
        </geader>
        <app-new-quate @add="getData($event)"></app-new-quate>
        <app-qu @del="dele($event)" :quotes="quotes"></app-qu>
        <delete>
          
        </delete>
        
  </div>

</template>

<script>
import Qu from '../components/qu.vue'
import NewQuate from '../components/newQuate.vue'
import Delete from '../components/delete.vue'
import Geader from '../components/geader.vue'
export default {
  
  data:function(){
    return{
      max:"10",//条数的最大值
      quotes:[
        "This is the first"   //这是第一条
      ]
    }
  },
  //给子组件起名      标签  ： 
  components:{
    "appQu":Qu,
    "appNewQuate":NewQuate,
    "delete":Delete,
    "geader":Geader
  },
  methods:{
    getData:function(data){
      if(this.quotes.length>=this.max){
        return alert("请删除一条")
      }
      this.quotes.push(data)
    },
    dele:function(dele){
      this.quotes.splice(dele,1);
    }
  }
}
</script>

<style>


</style>
