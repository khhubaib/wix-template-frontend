<script>
export default {
    name: 'HerComp',

    

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
    <div class="hero-comp" >
        <img src="/hero.png" id="hero-img" alt="" >

        <div class="hero-overlay ">

            <div class="overlay-top">
                <h1 v-threed>TAILORED MARKETING STRATEGIES</h1>
                <p v-threed>Empowering Businesses Digitally</p>

                
            </div>

            <a class="hero-btn" href="#">Explore more</a>
            
                
            
        </div>

    </div>


</template>

<style>
 
</style>
