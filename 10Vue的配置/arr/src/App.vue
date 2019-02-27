<template>
  <div class="container">
      <div class="row">
            <div  class="col-xs-12">  
                  <button class="btn btn-primary" v-on:click="selected='red'">click me</button>
                  <button class="btn btn-success" v-on:click="selected='blue'">click my</button>
                  <button class="btn btn-danger" v-on:click="selected='yellow'">click you</button>
              <hr>
             
                <keep-alive>
                       <component :is="selected">
                      
                      </component>
                </keep-alive>
             
            </div>
      </div>
  </div>
</template>

 <script>

 import red from './components/red.vue'
  import blue from './components/blue.vue'
   import yellow from './components/yellow.vue'
 export default {
   data:function(){
     return{
       selected:"red",

     }
   },

   components:{
     "red":red,
     "blue":blue,
      "yellow":yellow
   }
   
 }
 </script>
 


<style> 
  .conpoment{
    height: 80px;
    border: 2px solid pink;
    margin: 30px auto;
    width: 60%;
    
  }
</style>
