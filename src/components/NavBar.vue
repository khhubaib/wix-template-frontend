<script>
export default {
  name: "NavBar",
  data() {
    return {
      mobileMenuOpen: false, // controls dropdown visibility
    };
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<template>
  <div class="navbar">
    <!-- Left Logo -->
    <div class="navbar-left">
      <h1>T.KENSINGTON</h1>
    </div>

    <!-- Desktop Links -->
    <div class="navbar-right">
      <ul class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/service">Service</router-link>
        <router-link to="/ourwork">Our Work</router-link>
        <router-link to="/contact">Contact</router-link>
      </ul>
    </div>

    <!-- Hamburger (mobile only) -->
    <div class="ham-burger-icon" @click="toggleMenu">
      <span class="ham-burger"></span>
      <span class="ham-burger"></span>
      <span class="ham-burger"></span>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div v-if="mobileMenuOpen" class="mobile-menu">
    <router-link to="/" @click="mobileMenuOpen=false">Home</router-link>
    <router-link to="/about" @click="mobileMenuOpen=false">About</router-link>
    <router-link to="/service" @click="mobileMenuOpen=false">Service</router-link>
    <router-link to="/ourwork" @click="mobileMenuOpen=false">Our Work</router-link>
    <router-link to="/contact" @click="mobileMenuOpen=false">Contact</router-link>
  </div>
</template>

<style>

</style>
