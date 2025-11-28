<script>
export default {
  name: "Workgrids",

  data() {
    return {
      images: [
        "/aboutgirls.avif",
        "/computer.avif",
        "/work3.jpeg",
        "/work4.jpeg",
        "/work5.jpeg",
        "/work6.jpeg",
        "/work8.jpeg",
        "/work7.jpeg",
        "/work9.jpeg",
        "/work10.jpeg",
        "/work11.jpeg",
        "/worklast.jpeg",
      ],
      sliderOpen: false,
      activeIndex: 0,
    };
  },

  methods: {
    openSlider(index) {
      this.activeIndex = index;
      this.sliderOpen = true;
    },
    closeSlider() {
      this.sliderOpen = false;
    },
    nextImg() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
    prevImg() {
      this.activeIndex =
        (this.activeIndex - 1 + this.images.length) % this.images.length;
    },
  },

  mounted() {
    // ESC key to close
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeSlider();
    });
  },
};
</script>


<template>
  <div class="parent-flex">
    <div class="flex1">
      <div class="img1" @click="openSlider(0)">
        <img :src="images[0]" />
      </div>

      <div class="img2" @click="openSlider(1)">
        <img :src="images[1]" />
      </div>

      <div class="img3" @click="openSlider(2)">
        <img :src="images[2]" />
      </div>
    </div>

    <div class="flex2">
      <div @click="openSlider(3)">
        <img :src="images[3]" />
      </div>

      <div @click="openSlider(4)">
        <img :src="images[4]" />
      </div>
    </div>

    <div class="flex3">
      <div>
        <div @click="openSlider(5)">
          <img :src="images[5]" />
        </div>

        <div @click="openSlider(6)">
          <img :src="images[6]" />
        </div>
      </div>

      <div>
        <div @click="openSlider(7)">
          <img :src="images[7]" />
        </div>

        <div @click="openSlider(8)">
          <img :src="images[8]" />
        </div>
      </div>
    </div>

    <div class="flex4">
      <div>
        <div>
          <div @click="openSlider(9)">
            <img :src="images[9]" />
          </div>

          <div @click="openSlider(10)">
            <img :src="images[10]" />
          </div>
        </div>

        <div @click="openSlider(11)">
          <img :src="images[11]" />
        </div>
      </div>
    </div>
  </div>

  <!-- ⭐ Fullscreen Slider ⭐ -->
  <div v-if="sliderOpen" class="slider-overlay" @click.self="closeSlider">
    <button class="close-btn" @click="closeSlider">×</button>

    <button class="nav-btn left" @click="prevImg">❮</button>
    <img class="slider-img" :src="images[activeIndex]" />
    <button class="nav-btn right" @click="nextImg">❯</button>
  </div>
</template>


<style>
/* ---------------- MAIN LAYOUT ---------------- */

.parent-flex {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Shared row layout */
.flex1, .flex2, .flex3, .flex4 {
    display: flex;
    gap: 30px;
}

/* All image containers */
.parent-flex div {
    position: relative;
    overflow: hidden;
    border-radius: 25px;
}

/* All images fit container */
.parent-flex img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;

    /* Hover transition */
    transition: transform 0.6s ease, filter 0.6s ease;
}

/* Hover effect on ONLY the hovered image */
.parent-flex img:hover {
    transform: scale(1.08);
    filter: brightness(70%);
}

/* ---------------- DESKTOP SIZES ---------------- */

.flex1 {
    height: 50vh;
}
.img1 { flex-basis: 45%; }
.img2 { flex-basis: 20%; }
.img3 { flex-basis: 35%; }

.flex2 {
    height: 80vh;
}
.flex2 > div { flex: 1; }

.flex3 {
    height: 90vh;
}
.flex3 > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.flex4 {
    height: 90vh;
}
.flex4 > div {
    flex: 1;
    display: flex;
    gap: 30px;
}
.flex4 > div > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* ---------------- TABLET BREAKPOINT ---------------- */
@media (max-width: 900px) {

    .parent-flex{
        gap: 10px;
}

    .flex1 {
        height: 40vh;
        gap: 15px;
    }

    .flex2 {
        height: 60vh;
        gap: 15px;
    }

    .flex3,
    .flex4 {
        height: 70vh;
        gap: 15px;
    }

    .parent-flex div{
        border-radius: 20px;
    }
}

/* ---------------- MOBILE BREAKPOINT ---------------- */
@media (max-width: 600px) {

    /* Stack all rows vertically */
    .flex1, .flex2, .flex3, .flex4 {
        flex-direction: column;
        height: auto;
    }

    /* Reset inner flex */
    .flex3 > div,
    .flex4 > div,
    .flex4 > div > div {
        flex-direction: column;
    }

    .flex1 > div,
    .flex2 > div,
    .flex3 > div > div,
    .flex4 > div > div > div {
        height: 40vh; /* uniform mobile height */
    }

    /* Reduce gap on mobile */
    .parent-flex {
        gap: 10px;
    }

    .flex1,
    .flex2,
    .flex3,
    .flex4 {
        gap: 10px;
    }

    .parent-flex div{
        border-radius: 10px;
    }
}


.slider-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.slider-img {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 15px;
  animation: zoomIn 0.3s ease;
}

/* Navigation arrows */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  font-size: 50px;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  transition: 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.35);
}

.nav-btn.left {
  left: 3%;
}

.nav-btn.right {
  right: 3%;
}

/* Close button */
.close-btn {
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 50px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

/* Animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}


</style>
