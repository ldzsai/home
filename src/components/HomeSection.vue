<script setup lang="ts">
</script>

<template>
  <section
    class="home-section min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-16 relative overflow-hidden"
    id="home">
    <div class="max-w-6xl mx-auto z-10 relative">
      <div class="relative inline-block mb-12 group">
        <h1 class="hero-title text-5xl sm:text-6xl md:text-8xl font-bold leading-none tracking-tight">
          <span class="inline transition-all duration-500 group-hover:tracking-wide">
            <span
              class="text-white relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-geminiBlue group-hover:to-accentPurple hero-title-character">灵</span>
            <span
              class="text-gray-200 relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-geminiBlue group-hover:to-accentPurple hero-title-character">动</span>
          </span>
          <span
            class="inline ml-0 md:ml-4 transition-all duration-500 group-hover:tracking-wide">
            <span
              class="text-gray-100 relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-geminiBlue group-hover:to-accentPurple hero-title-character">智</span>
            <span
              class="text-gray-300 relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-geminiBlue group-hover:to-accentPurple hero-title-character">算</span>
          </span>
        </h1>
        <div
          class="absolute -bottom-6 -left-12 -z-10 w-40 h-40 bg-geminiBlue rounded-full mix-blend-soft-light opacity-20 blur-3xl transition-all duration-700 group-hover:opacity-30">
        </div>
        <div
          class="absolute -top-10 -right-10 -z-10 w-52 h-52 bg-geminiGreen rounded-full mix-blend-soft-light opacity-20 blur-3xl transition-all duration-700 group-hover:opacity-30">
        </div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-geminiYellow rounded-full mix-blend-soft-light opacity-10 blur-3xl transition-all duration-1000 group-hover:opacity-20">
        </div>
      </div>

      <p class="text-xl sm:text-2xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto">
        <span class="text-white">用智能算法驱动</span>
        <span class="text-geminiBlue glowing-text">未来</span>
      </p>

      <div class="relative mb-16">
        <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          “用科技赋能未来”，致力于通过创新的AI技术推动社会进步与产业升级，为各行业量身定制高效、智能的解决方案，助力行业实现数字化转型与跨越式发展。
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center mb-12 w-full max-w-4xl mx-auto">
        <div
          class="relative bg-gradient-to-br from-geminiBlue/20 to-geminiBlue/5 backdrop-blur-sm border border-geminiBlue/30 rounded-2xl p-5 text-center shadow-lg hover:shadow-geminiBlue/20 transition-all duration-300 hover:-translate-y-1">
          <div
            class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-geminiBlue flex items-center justify-center">
            <span class="text-white font-bold text-sm">1</span>
          </div>
          <div class="mt-2">
            <i class="fas fa-lightbulb text-2xl text-geminiBlue mb-3"></i>
          </div>
          <div class="text-lg font-bold text-geminiBlue">创新</div>
        </div>
        <div
          class="relative bg-gradient-to-br from-geminiGreen/20 to-geminiGreen/5 backdrop-blur-sm border border-geminiGreen/30 rounded-2xl p-5 text-center shadow-lg hover:shadow-geminiGreen/20 transition-all duration-300 hover:-translate-y-1">
          <div
            class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-geminiGreen flex items-center justify-center">
            <span class="text-white font-bold text-sm">2</span>
          </div>
          <div class="mt-2">
            <i class="fas fa-comments text-2xl text-geminiGreen mb-3"></i>
          </div>
          <div class="text-lg font-bold text-geminiGreen">沟通</div>
        </div>
        <div
          class="relative bg-gradient-to-br from-geminiYellow/20 to-geminiYellow/5 backdrop-blur-sm border border-geminiYellow/30 rounded-2xl p-5 text-center shadow-lg hover:shadow-geminiYellow/20 transition-all duration-300 hover:-translate-y-1">
          <div
            class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-geminiYellow flex items-center justify-center">
            <span class="text-white font-bold text-sm">3</span>
          </div>
          <div class="mt-2">
            <i class="fas fa-handshake text-2xl text-geminiYellow mb-3"></i>
          </div>
          <div class="text-lg font-bold text-geminiYellow">信任</div>
        </div>
        <div
          class="relative bg-gradient-to-br from-geminiRed/20 to-geminiRed/5 backdrop-blur-sm border border-geminiRed/30 rounded-2xl p-5 text-center shadow-lg hover:shadow-geminiRed/20 transition-all duration-300 hover:-translate-y-1">
          <div
            class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-geminiRed flex items-center justify-center">
            <span class="text-white font-bold text-sm">4</span>
          </div>
          <div class="mt-2">
            <i class="fas fa-running text-2xl text-geminiRed mb-3"></i>
          </div>
          <div class="text-lg font-bold text-geminiRed">执行力</div>
        </div>
      </div>

      <div class="flex justify-center">
        <a href="#applications"
          class="btn-glow bg-gradient-to-r from-geminiBlue to-accentPurple hover:from-geminiBlue/90 hover:to-accentPurple/90 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <i class="fas fa-arrow-down mr-2"></i>探索我们的世界
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 left-2/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-8 h-12 border-2 border-geminiBlue/50 rounded-full flex justify-center">
        <div class="w-1 h-4 bg-geminiBlue mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  padding-top: 96px;
}

.home-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
        radial-gradient(circle at 10% 20%, rgba(66, 133, 244, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(52, 168, 83, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 50% 50%, rgba(251, 188, 5, 0.05) 0%, transparent 30%);
    z-index: 0;
}

.glowing-text {
  position: relative;
  display: inline-block;
}

.glowing-text::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.3), transparent);
  animation: glowText 3s infinite;
  opacity: 0;
}

@keyframes glowText {
  0%,
  100% {
    opacity: 0;
    transform: scaleX(0.8);
  }

  50% {
    opacity: 1;
    transform: scaleX(1);
  }
}

.hero-title span span {
  display: inline-block;
  animation: titleEntrance 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  transform-origin: bottom center;
  opacity: 0;
}

.hero-title span:first-child span:nth-child(1) {
  animation-delay: 0.1s;
}

.hero-title span:first-child span:nth-child(2) {
  animation-delay: 0.3s;
}

.hero-title span:last-child span:nth-child(1) {
  animation-delay: 0.5s;
}

.hero-title span:last-child span:nth-child(2) {
  animation-delay: 0.7s;
}

/* 添加英雄标题动画 */
@keyframes titleEntrance {
  0% {
    opacity: 0;
    transform: translateY(50px) rotateX(90deg) scale(0.5);
    filter: blur(4px);
    letter-spacing: -5px;
  }
  
  25% {
    opacity: 0.5;
    transform: translateY(20px) rotateX(45deg) scale(1.1);
    filter: blur(2px);
  }
  
  50% {
    opacity: 1;
    transform: translateY(-10px) rotateX(-10deg) scale(1.05);
    filter: blur(0.5px);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0) scale(1);
    filter: blur(0px);
    letter-spacing: 0px;
  }
}

/* 添加装饰性圆圈动画 */
@keyframes pulseGrow {
  0% {
    transform: scale(1);
    opacity: 0.2;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }

  100% {
    transform: scale(1);
    opacity: 0.2;
  }
}

.hero-title+div .absolute {
  animation: pulseGrow 4s infinite ease-in-out;
}

.hero-title+div .absolute:nth-child(2) {
  animation-delay: 0.5s;
}

.hero-title+div .absolute:nth-child(3) {
  animation-delay: 1s;
}

/* 鼠标悬停效果 */
.hero-title span:hover {
  filter: brightness(1.3);
}

.btn-glow {
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(66, 133, 244, 0.5);
  }

  100% {
    box-shadow: 0 0 20px rgba(66, 133, 244, 0.8), 0 0 30px rgba(66, 133, 244, 0.6);
  }
}
</style>