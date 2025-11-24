<script>
export default{
  name: 'Home',
}
</script>

<template>
  <div>
    <div class="text-rotate" style="position: relative; height: 2.5rem;">
  <span class="word" style="animation-delay: 0s;">Developer</span>
  <span class="word" style="animation-delay: 2s;">Designer</span>
  <span class="word" style="animation-delay: 4s;">Creator</span>
</div>

  </div>
</template>

<style>
.text-rotate {
  font-size: 2rem;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
}

.text-rotate > .word {
  display: inline-block;
  opacity: 0;
  animation: rotateWords 6s linear infinite 0s;
  position: absolute;
}

@keyframes rotateWords {
  0%, 20% { opacity: 0; transform: translateY(-20px); }
  25%, 45% { opacity: 1; transform: translateY(0); }
  50%, 100% { opacity: 0; transform: translateY(20px); }
}
</style>