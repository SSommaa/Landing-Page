<script setup>
import AboutUs from './AboutUs.vue'
import Hero from './Hero.vue'
import Services from './Services.vue'
import Footer from './Footer.vue'
import FeaturedProjects from './FeaturedProjects.vue'
import CallToAction from './CallToAction.vue'
import Customers from './Customers.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Smooth scrolling functionality
const isLoading = ref(true)

// Store scroll handler reference for cleanup
let scrollHandler = null
let observer = null

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // Simulate loading for smooth transition
  setTimeout(() => {
    isLoading.value = false
    
    // Check if there's a hash in the URL and scroll to it
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 500) // Wait a bit more for components to fully load
    }
  }, 1000)

  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Handle intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // Observe all sections
  setTimeout(() => {
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })
  }, 1500)

  // Handle scroll functionality
  scrollHandler = () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn')
    const progressBar = document.getElementById('progressBar')
    
    if (scrollToTopBtn && progressBar) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPercent = (scrollTop / scrollHeight) * 100
      
      // Update progress bar
      progressBar.style.width = scrollPercent + '%'
      
      // Show/hide scroll to top button
      if (scrollTop > 300) {
        scrollToTopBtn.style.display = 'flex'
      } else {
        scrollToTopBtn.style.display = 'none'
      }
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  // Cleanup scroll event listener
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
  
  // Cleanup intersection observer
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <!-- Loading screen -->
  <div 
    v-if="isLoading" 
    class="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 z-50 flex items-center justify-center"
  >
    <div class="text-center">
      <!-- Loading logo -->
      <div class="mb-8">
        <div class="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
          <span class="text-white font-black text-3xl">B</span>
        </div>
      </div>
      
      <!-- Loading text -->
      <h2 class="text-3xl font-black text-white mb-4 animate-pulse">
        BestBuild
      </h2>
      <p class="text-gray-300 mb-8">Cargando experiencia premium...</p>
      
      <!-- Loading animation -->
      <div class="flex justify-center space-x-2">
        <div class="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
        <div class="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-100"></div>
        <div class="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-200"></div>
      </div>
      
      <!-- Progress bar -->
      <div class="mt-8 w-64 mx-auto">
        <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-amber-400 to-orange-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main content -->
  <div v-else class="min-h-screen bg-white relative overflow-hidden">
    
    <!-- Floating background elements -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full animate-float-slow"></div>
      <div class="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/20 rounded-full animate-float-medium"></div>
      <div class="absolute top-1/2 right-1/4 w-3 h-3 bg-green-400/10 rounded-full animate-float-fast"></div>
      <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/15 rounded-full animate-float-slow delay-1000"></div>
    </div>

    <!-- Page sections with smooth transitions -->
    <main class="relative z-10">
      
      <!-- Hero Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <Hero />
      </section>

      <!-- About Us Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <AboutUs id="about" />
      </section>

      <!-- Services Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <Services id="services" />
      </section>

      <!-- Featured Projects Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <FeaturedProjects id="projects" />
      </section>

      <!-- Customers Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <Customers />
      </section>

      <!-- Call to Action Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <CallToAction />
      </section>

      <!-- Footer Section -->
      <section class="section-transition opacity-0 transform translate-y-8">
        <Footer />
      </section>

    </main>

    <!-- Scroll to top button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-110 transition-all duration-300 z-40 flex items-center justify-center group"
      style="display: none;"
      id="scrollToTopBtn"
    >
      <svg class="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>

    <!-- Progress indicator -->
    <div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div id="progressBar" class="h-full bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-300" style="width: 0%"></div>
    </div>

    <!-- Page transition overlay -->
    <div 
      id="pageTransition" 
      class="fixed inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 backdrop-blur-sm opacity-0 pointer-events-none z-30 transition-opacity duration-500"
    ></div>

  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(120deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(90deg); }
}

@keyframes loading-bar {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animate-loading-bar {
  animation: loading-bar 2s ease-out;
}

/* Section transition classes */
.section-transition {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #f59e0b, #ea580c);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #f97316, #dc2626);
}

/* Delay classes for staggered animations */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-1000 { animation-delay: 1000ms; }
</style>