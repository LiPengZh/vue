<template>
    <div class="conpoment">
        <slot>
              <h1>wwwwwww</h1>
              <button v-on:click="concent++">cilckme</button>
              <h1>{{concent}}</h1>
        </slot>
    </div>
</template>
<script>


export default {
    data:function(){
        return{
            concent:1,
        }
    }
    
}
</script>
<style>

</style>
