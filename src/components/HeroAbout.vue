<script>
export default {
    name: 'HeroAbout',



    mounted() {
        const layer = this.$refs.layer;
        let offset = 0;
        const maxShift = 80;
        let ticking = false;

        const update = () => {
            layer.style.transform = `translateX(${offset}px)`;
            ticking = false;
        };

        this._scrollHandler = () => {
            const scroll = window.scrollY;

            // absolute parallax, not delta-based drifting
            offset = scroll * -0.1;

            // clamp
            offset = Math.max(-maxShift, Math.min(maxShift, offset));

            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        window.addEventListener("scroll", this._scrollHandler);


        document.addEventListener("DOMContentLoaded", () => {
            const textElement = document.querySelector(".text-3d-roll");

            const observer = new IntersectionObserver(
                (entries, observerInstance) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            textElement.classList.add("animate"); // start animation
                            observerInstance.disconnect();        // stop observing → one-time only
                        }
                    });
                },
                { threshold: 0.3 } // Trigger when 30% of the text is visible
            );

            observer.observe(textElement);
        });

    },

    beforeUnmount() {
        window.removeEventListener("scroll", this._scrollHandler);
    }



}
</script>

<template>
    <div class="hero-comp">
        <img src="/computer.avif" id="hero-img" alt="" ref="layer">

        <div class="hero-overlay-about ">

            <div class="overlay-top-about text-3d-roll">
                <div>
                    <p>Standout Projects</p>
                    <h1>LOCAL THRIVE SUCCESS</h1>
                </div>



            </div>

            <p>T. Kensington is a dynamic digital agency known for its innovative marketing strategies and impactful
                solutions. With a dedicated team of creative thinkers and data analysts, we specialize in SEO, PPC,
                social media, and content marketing to enhance brand visibility and drive conversions.</p>



        </div>

    </div>


</template>

<style scoped>




</style>
