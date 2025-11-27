<script>
export default {
    name: 'AboutHero2',

    

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
    <div class=" hero-comp" >
        <img src="/aboutgirls.avif" id="hero-img" alt="" ref="layer">

        <div class="hero-overlay ">

            <div class="overlay-top-about ">
                <div>
                    <p v-threed>Our Mission</p>
                <h1 v-threed>DRIVING SUCCESS</h1>
                </div>
                

                
            </div>

            <p v-threed>
Our Mission
DRIVING SUCCESS
Our mission is to create data-driven marketing campaigns that resonate with audiences, boost online traffic, and elevate brand recognition. We aim to transform businesses with compelling storytelling and outcome-focused strategies.</p>
            
                
            
        </div>

    </div>


</template>

<style scoped>
</style>
