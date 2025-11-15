<script setup lang="ts">
// 主应用组件，整合所有页面部分
import { defineAsyncComponent, onMounted, onUnmounted } from 'vue';

// 动态导入所有页面组件
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
const ParticlesBackground = defineAsyncComponent(() => import('@/components/ParticlesBackground.vue'));
const HomeSection = defineAsyncComponent(() => import('@/components/HomeSection.vue'));
const ApplicationsSection = defineAsyncComponent(() => import('@/components/ApplicationsSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('@/components/ProjectsSection.vue'));
const DataSection = defineAsyncComponent(() => import('@/components/DataSection.vue'));
const TeamSection = defineAsyncComponent(() => import('@/components/TeamSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const PageFooter = defineAsyncComponent(() => import('@/components/PageFooter.vue'));

// 使用滚动动画和锚点跳转功能
import { useScrollAnimations } from '@/composables/useScrollAnimations';
const { initScrollAnimations, handleHashNavigation } = useScrollAnimations();

// 处理 hash 变化
const onHashChange = () => {
  // 给页面一些时间更新
  setTimeout(() => {
    handleHashNavigation();
  }, 100);
};

// 在组件挂载时初始化功能
onMounted(async () => {
  // 添加 hashchange 事件监听器
  window.addEventListener('hashchange', onHashChange);
  
  // 给异步组件一些加载时间
  await new Promise(resolve => setTimeout(resolve, 500));
  initScrollAnimations();
  handleHashNavigation();
});

// 组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange);
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