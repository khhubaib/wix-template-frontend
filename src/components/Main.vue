<script>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue'

export default{
    name: 'Main',
    components:{
        NavBar,
        Footer,
    },
}
</script>

<template>
    <div>
        <NavBar/>
        <router-view/>
        <Footer/>
    </div>
</template>

<style>

</style>