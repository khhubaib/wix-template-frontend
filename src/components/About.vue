<script>
import AboutGrid from './AboutGrid.vue';
import HeroAbout from './HeroAbout.vue';
import Solutions from './Solutions.vue';
import HeroComp from './HeroComp.vue';
import AboutHero2 from './AboutHero2.vue';

export default{
    name: 'About',
    components:{
        Solutions,
        HeroAbout,
        AboutGrid,
        AboutHero2,
    },

    data(){
        return{
            span: 'Innovaticve Strategies',
            h1: 'MARKETING SOLUTION EXPERTS',
        };
    }
}
</script>

<template>
    <div>
        <solutions
        :span="span"
        :h1="h1"
        />
        <hero-about/>
        <about-grid/>
        <AboutHero2/>



    </div>
</template>

<style>

</style>