<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Particle {
  id: number;
  size: number;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  color: string;
  boxShadow: string;
  isFloatReverse: boolean;
}

const particles = ref<Particle[]>([]);
const particleCount = ref(0);

// 创建动态粒子背景
const createParticles = () => {
  particleCount.value = Math.min(65, Math.floor(window.innerWidth / 20));
  
  const newParticles: Particle[] = [];
  const colors = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#8B5CF6', '#00f0ff', '#ff00c8'];
  
  for (let i = 0; i < particleCount.value; i++) {
    const size = Math.random() * 4 + 1;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    newParticles.push({
      id: i,
      size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 7}s`,
      color: randomColor,
      boxShadow: `0 0 ${Math.random() * 20 + 5}px ${randomColor}`,
      isFloatReverse: i % 2 === 0 ? false : true
    });
  }
  
  particles.value = newParticles;
};

onMounted(() => {
  createParticles();
  window.addEventListener('resize', createParticles);
});

onUnmounted(() => {
  window.removeEventListener('resize', createParticles);
});
</script>

<template>
  <div class="particles">
    <div 
      v-for="particle in particles" 
      :key="particle.id"
      :class="['particle', { 'float-reverse': particle.isFloatReverse }]"
      :style="{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        left: particle.left,
        top: particle.top,
        animationDelay: particle.animationDelay,
        animationDuration: particle.animationDuration,
        background: particle.color,
        boxShadow: particle.boxShadow
      }"
    ></div>
  </div>
</template>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3);
  }
  
  25% {
    transform: translateY(-30px) translateX(20px);
    opacity: 1;
    box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.6);
  }
  
  50% {
    transform: translateY(-60px) translateX(0);
    opacity: 0.4;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.4);
  }
  
  75% {
    transform: translateY(-30px) translateX(-20px);
    opacity: 0.9;
    box-shadow: 0 0 18px rgba(255, 255, 255, 0.9), 0 0 28px rgba(255, 255, 255, 0.5);
  }
}

@keyframes floatReverse {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 12px rgba(255, 255, 255, 0.3);
  }
  
  25% {
    transform: translateY(30px) translateX(-25px);
    opacity: 0.9;
    box-shadow: 0 0 22px rgba(255, 255, 255, 1), 0 0 32px rgba(255, 255, 255, 0.6);
  }
  
  50% {
    transform: translateY(60px) translateX(0);
    opacity: 0.3;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5), 0 0 22px rgba(255, 255, 255, 0.3);
  }
  
  75% {
    transform: translateY(30px) translateX(25px);
    opacity: 1;
    box-shadow: 0 0 25px rgba(255, 255, 255, 1), 0 0 35px rgba(255, 255, 255, 0.7);
  }
}
</style>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: float 5s infinite ease-in-out;
}

.particle.float-reverse {
  animation-name: floatReverse;
}
</style>