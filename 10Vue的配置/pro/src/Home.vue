<template>
<div>
    <p>Server Status:{{status}}</p>
    <hr>
    <button v-on:click="changeS">change</button>
</div>
</template>
<script>
export default {
    data:function(){
        return{ 
            status:"circle"
        }
    },
    methods:{
        changeS:function(){
            this.status="null"
        }
    }
}
</script>
<style>

</style>
