<template>
<div class="row">
    <h1>QUOTES Added
    </h1>

    <div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar"
         aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
         :style="{width:current/max*100+'%'}">
      {{current}}/{{max}}
    </div>
</div>
</div>
</template>

<script>
    export default {
        props:["max","current"]
        
    }
</script>

<style scoped>

</style>