import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register directive BEFORE mounting
app.directive("threed", {
  mounted(el) {
    el.classList.add("threeD-text")

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("animate")
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
  }
})

app.use(router)
app.mount('#app')
