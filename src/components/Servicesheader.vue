<script>
export default {
  name: 'Servicesheader',
  mounted() {
    // ICON ROTATION — keep your logic
    const plusIcons = document.querySelectorAll('.service-crad i');

    const rotateIcons = () => {
      const scrollY = window.scrollY;
      plusIcons.forEach(icon => {
        icon.style.transform = `rotate(${scrollY}deg) scale(1.5)`;
      });
    };

    window.addEventListener('scroll', rotateIcons);
    this._rotateIcons = rotateIcons;


    // ANIMATION ON SCROLL — new logic
    const cards = document.querySelectorAll('.service-crad');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-now');
            observer.unobserve(entry.target); // prevent re-trigger
          }
        });
      },
      { threshold: 0.5 } // triggers when 20% visible
    );

    cards.forEach(card => observer.observe(card));
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this._rotateIcons);
  }
}
</script>

<template>
  <div class="service-header">
    <div>
      <p v-threed>Our Approach</p>
      <h1 v-threed>TAILORED MARKETING SOLUTIONS</h1>
      <p v-threed>Empower your brand with our strategic expertise</p>
    </div>
  </div>

  <div class="services-bottom">
    <div class="services-inner">
      <div class="service-crad from-left enter-animation">
        <div class="icon-wrapper">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="service-text">
          <h3 v-threed>SEO SERVICES</h3>
          <p v-threed>
            Enhance your online presence and reach with our advanced SEO solutions tailored for growth and
            visibility.
          </p>
        </div>
      </div>

      <div class="service-crad from-right enter-animation">
        <div class="icon-wrapper">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="service-text">
          <h3 v-threed>PPC MANAGEMENT</h3>
          <p v-threed>Drive instant traffic and conversions through targeted PPC campaigns optimized for maximum results.</p>
        </div>
      </div>

      <div class="service-crad from-left enter-animation">
        <div class="icon-wrapper">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="service-text">
          <h3 v-threed>SOCIAL MEDIA CAMPAIGNS</h3>
          <p v-threed>Engage your audience with captivating social media strategies designed to boost brand awareness and drive engagement.</p>
        </div>
      </div>

      <div class="service-crad from-right enter-animation">
        <div class="icon-wrapper">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="service-text">
          <h3 v-threed>CONTENT MARKETING</h3>
          <p v-threed>Tell your brand story effectively with expert content marketing that aligns with your audience's preferences and behaviors.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Header */
.service-header {
  margin-top: clamp(140px, 32vw, 300px);
  margin-bottom: 15vh;
  display: flex;
  justify-content: center;
}

.service-header>div {
  text-align: center;
  max-width: 800px;
}

.service-header>div h1 {
  font-size: clamp(30px, 4vw, 80px);
  font-weight: 800;
  margin: 10px 0;
}

.service-header>div p {
  font-size: 20px;
  margin: 5px 0;
  color: #555;
}

/* Services */
.services-bottom {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.services-inner {
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Service Card */
.service-crad {
  display: flex;
  flex-direction: row; /* row layout */
  align-items: center;
  gap: 40px;
  background: #f8f8f8;
  padding: 20px 25px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  height: 5rem;
}

.service-crad:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-crad i {
  font-size: 2.5rem; /* slightly smaller than before */
  color: #000; /* black */
  font-weight: 400; /* less bold */
  transition: transform 0.2s ease;
}

.service-text {
  display: flex;
  flex-direction: row; /* text stays in row */
  align-items: center;
  gap: 40px;
}

.service-text h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #222;
  flex-basis: 30%;
}

.service-text p {
  margin: 0;
  color: #555;
  line-height: 1.4;
  font-size: 0.95rem;
  flex-basis: 70%;
  text-align: left;
}

/* Responsive */
@media(max-width: 800px) {
  .service-crad {
    flex-direction: column;
    text-align: center;
  }

  .service-text {
    flex-direction: column;
    gap: 10px;
  }

  .icon-wrapper {
    margin-bottom: 10px;
  }
}

@media(max-width:942px){
    .service-text{
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
}

@media(max-width:802px){
    .services-inner{
        flex-basis: 90%;
    }

    .service-crad{
        flex-direction: column;
        height: 10rem;
        align-items: flex-start;
    }
}

@media(max-width:548px){
     .service-crad{
        height: 15.5rem;
     }
}


/* Initial hidden state */
/* hidden initial state */
.enter-animation {
  opacity: 0;
}

/* animation gets applied only when visible */
.animate-now {
  animation: slideIn 2s ease forwards;
}


/* Alternating directions */
.from-left {
  transform: translateX(-120px);
}

.from-right {
  transform: translateX(120px);
}

/* Animation keyframes */
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
