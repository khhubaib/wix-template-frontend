<script>
export default {
    name: 'Solutions',

    props:{
        span: String,
        h1: String,
    }
}
</script>

<template>
    <div class="solutions">

        <div class="solutions-inner">
            <span v-threed>{{span}}</span>
            <h1 v-threed>{{h1}}</h1>
        </div>

    </div>
</template>

<style>

</style>