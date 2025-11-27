<script>
export default {
    name: 'HomeGrid3',
    data() {
        return {
            rotation: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Rotate based on scroll position
            this.rotation = window.scrollY % 360; // keep within 0-360deg
        }
    }
}
</script>

<template>
    <div>
        <div class="parent3">
            <div class="parent3-div1">
                <div class="parent3-div-container">
                    <div class="box-line2" :style="{'--rotation': rotation + 'deg'}"></div>
                    <div class="parent3-content">
                        <span v-threed>01</span>
                        <h3 v-threed>SEO</h3>
                        <p v-threed>Search engine optimization</p>
                    </div>
                </div>
            </div>
            <div class="parent3-div2">
                <div class="parent3-div-container">
                    <div class="box-line2" :style="{'--rotation': rotation + 'deg'}"></div>
                    <div class="parent3-content">
                        <span v-threed>02</span>
                        <h3 v-threed>PPC</h3>
                        <p v-threed>Pay-Per-Click Management Expertise</p>
                    </div>
                </div>
            </div>
            <div class="parent3-div3">
                <div class="parent3-div-container">
                    <div class="box-line2" :style="{'--rotation': rotation + 'deg'}"></div>
                    <div class="parent3-content">
                        <span v-threed>03</span>
                        <h3 v-threed>SOCIAL MEDIA</h3>
                        <p v-threed>Comprehensive Social Media Campaigns</p>
                    </div>
                </div>
            </div>
            <div class="parent3-div4">
                <div class="parent3-div-container">
                    <div class="box-line2" :style="{'--rotation': rotation + 'deg'}"></div>
                    <div class="parent3-content">
                        <span v-threed>04</span>
                        <h3 v-threed>CONTENT MARKETING</h3>
                        <p v-threed>Engaging Content Strategies</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
