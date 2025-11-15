<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);
const windowWidth = ref(0);
const activeSection = ref('');

// 菜单项数据
const menuItems = [
  { id: 'home', label: '首页', icon: 'fas fa-home', href: '#home' },
  { id: 'applications', label: '场景', icon: 'fas fa-shapes', href: '#applications' },
  { id: 'projects', label: '项目', icon: 'fas fa-file-alt', href: '#projects' },
  { id: 'data', label: '数据', icon: 'fas fa-database', href: '#data' },
  { id: 'team', label: '团队', icon: 'fas fa-users', href: '#team' },
  { id: 'contact', label: '联系我们', icon: 'fas fa-envelope', href: '#contact' }
];

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (e: Event) => {
  const target = e.target as HTMLElement;
  const menu = document.getElementById('desktopMenu');
  const button = document.getElementById('mobileMenuButton');
  
  if (menu && button && !menu.contains(target) && !button.contains(target) && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

const handleResize = () => {
  updateWindowWidth();
  if (windowWidth.value >= 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

// 处理菜单项点击
const handleMenuItemClick = (item: { id: string; href: string }) => {
  // 关闭移动端菜单
  isMenuOpen.value = false;
  
  // 更新活动section
  activeSection.value = item.id;
  
  // 使用vue router导航
  router.push(item.href);
  
  // 滚动到目标元素
  setTimeout(() => {
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

// 使用计算属性来处理菜单类名，使模板更清晰
const menuClasses = computed(() => {
  const isMobileView = windowWidth.value < 768;
  return {
    'flex flex-col absolute top-full left-0 right-0 bg-cardBg rounded-lg shadow-lg mt-2 py-2 w-full z-50': isMenuOpen.value,
    'hidden': !isMenuOpen.value && isMobileView,
    'md:flex items-center space-x-1 lg:space-x-4 whitespace-nowrap': !isMenuOpen.value && !isMobileView
  };
});

// 为每个菜单项计算类名
const menuItemClasses = computed(() => {
  return (item: { id: string }, isMobile: boolean) => ({
    'px-3 py-2 text-sm lg:px-5 lg:py-3 lg:text-gray-300 hover:text-geminiBlue transition-all duration-300 rounded-xl hover:bg-geminiBlue/10 font-medium': true,
    'justify-start text-left w-full my-1': isMobile,
    'text-center': !isMobile,
    // 选中状态样式，与hover样式保持一致
    'text-geminiBlue bg-geminiBlue/10': activeSection.value === item.id
  });
});

// 更新活动section
const updateActiveSection = () => {
  // 从sessionStorage获取活动section
  const storedSection = sessionStorage.getItem('activeSection');
  if (storedSection) {
    activeSection.value = storedSection;
  } else {
    // 默认设置为首页
    activeSection.value = 'home';
  }
};

onBeforeMount(() => {
  updateWindowWidth();
  updateActiveSection();
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', handleResize);
  
  // 监听路由变化
  watch(
    () => route.hash,
    (newHash) => {
      if (newHash) {
        const sectionId = newHash.substring(1);
        activeSection.value = sectionId;
        sessionStorage.setItem('activeSection', sectionId);
      }
    },
    { immediate: true }
  );
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <nav class="navbar fixed w-full top-0 z-50 border-b border-cardBg backdrop-blur-lg">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- 左侧Logo和标题 -->
      <div class="flex items-center space-x-3">
        <div
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-geminiBlue to-accentPurple flex items-center justify-center shadow-lg animate-pulse-slow">
          <i class="fas fa-brain text-white text-lg sm:text-xl"></i>
        </div>
        <img src="@/assets/ldzsai-logo.png" style="width: 6%; border-radius: 0.75rem;" alt="灵动智算"
          class="hidden md:block" />
        <span
          class="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-geminiBlue to-neonBlue">灵动智算</span>
      </div>

      <!-- 右侧导航菜单 -->
      <div 
        id="desktopMenu" 
        :class="menuClasses">
        <a
          v-for="item in menuItems"
          :key="item.id"
          @click.prevent="handleMenuItemClick(item)"
          :href="item.href"
          :class="menuItemClasses(item, isMenuOpen)">
          <i :class="item.icon + ' mr-1 lg:mr-2'"></i>{{ item.label }}
        </a>
      </div>

      <!-- 汉堡菜单按钮 -->
      <button 
        id="mobileMenuButton" 
        class="md:hidden p-2 text-gray-300 hover:text-geminiBlue transition-colors"
        @click="toggleMobileMenu">
        <i class="fas fa-bars text-xl"></i>
      </button>
    </div>
  </nav>
</template>