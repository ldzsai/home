<script setup lang="ts">
// 主应用组件，整合所有页面部分
import Navbar from '@/components/Navbar.vue';
import HomeSection from '@/components/HomeSection.vue';
import ApplicationsSection from '@/components/ApplicationsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import DataSection from '@/components/DataSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import PageFooter from '@/components/PageFooter.vue';
import ParticlesBackground from '@/components/ParticlesBackground.vue';
import { useScrollAnimations } from '@/composables/useScrollAnimations';
import { onMounted } from 'vue';

// 使用滚动动画和锚点跳转功能
const { initScrollAnimations, handleHashNavigation } = useScrollAnimations();

// 在组件挂载时初始化功能
onMounted(() => {
  initScrollAnimations();
  handleHashNavigation();
});
</script>

<template>
  <div class="app-container">
    <ParticlesBackground />
    <Navbar />
    <HomeSection />
    <ApplicationsSection />
    <ProjectsSection />
    <DataSection />
    <TeamSection />
    <ContactSection />
    <PageFooter />
  </div>
</template>

<style>
/* 添加全局样式 */
html {
  /* 平滑滚动过渡 */
  scroll-behavior: smooth;
}

html, body {
      margin: 0;
      padding: 0;
}

/* 为锚点目标添加偏移量，避免被固定导航栏遮挡 */
section[id] {
  scroll-margin-top: 1.5rem;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #4285F4, #34A853);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #34A853, #4285F4);
}
</style>

<style scoped>
.app-container {
  background-color: #0F172A;
  color: #e2e8f0;
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}
</style>