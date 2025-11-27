<script>
export default{
    name: 'Expertise',

    props:{
        ptag: "",
        h1: "",
        span: "",
    },

   
}
</script>

<template>
    <div class="expertise">
        <span v-threed>{{ span }}</span>
        <h1 v-threed>{{h1}}</h1>
        <p v-if="ptag" v-threed>{{ ptag }}</p>
    </div>
</template>

<style>


</style>