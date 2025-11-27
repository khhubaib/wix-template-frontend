<script>
import FormComp from './FormComp.vue';

export default{
    name: 'Contact',
    components:{
        FormComp
    },
    data(){
        return{
            picture: 'form-pic.avif',
            overlay: 'yes',
        };
    }
}
</script>

<template>
    <div>
        <form-comp
        :picture="picture"
        :overlay="overlay"
        />
    </div>
</template>

<style>

</style>