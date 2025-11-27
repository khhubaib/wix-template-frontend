<script>
import Workgrids from './Workgrids.vue';
import WorkHeader from './WorkHeader.vue';

export default{
    name: 'OurWork',
    components:{
        Workgrids,
        WorkHeader,
    },
}
</script>

<template>
    <div>

        <work-header/>
        <Workgrids/>
        
    </div>
</template>

<style>

</style>