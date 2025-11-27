<script>
import Expertise from './Expertise.vue';
import FormComp from './FormComp.vue';
import HeroComp from './HeroComp.vue';
import HomeGrid from './HomeGrid.vue';
import HomeGrid2 from './HomeGrid2.vue';
import HomeGrid3 from './Homegrid3.vue';
import Solutions from './Solutions.vue';

export default{
  name: 'Home',

  components:{
    HeroComp,
    Expertise,
    HomeGrid,
    HomeGrid2,
    Solutions,
    HomeGrid3,
    FormComp,
  },

  data(){
    return{
      h1: 'OUR EXPERTISE',
      span: 'About us',
      h2: 'EFFICIENT WORKFLOW',
      ptag: 'Our process involves a strategic blend of creativity and analytics to deliver tailored marketing solutions that drive results.',
      span2: 'Our Process',

      span3: 'Our Services',
      h3: 'TAILORED MARKETING SOLUTIONS',

      picture: 'form.jpeg',
    }
  }
}
</script>

<template>
  <div class="home">
   <hero-comp/>
    <expertise
    :h1="h1"
    :span="span"
    />
    <home-grid/>

    <expertise
    :h1="h2"
    :span="span2"
    :ptag="ptag"
    />

    <home-grid2/>
    <solutions
    :span="span3"
    :h1="h3"
    />
    <home-grid3/>
    <form-comp
    :picture="picture"
    />
  </div>
</template>

<style>

</style>