import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far, fab);
dom.watch();

// 挂载Vue应用
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app');

// 创建滚动动画处理函数
function initScrollAnimations() {
  // 添加自定义动画样式
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease forwards;
    }
    
    .scroll-fade-initial {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
  `;
  document.head.appendChild(style);

  // 创建观察器
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('scroll-fade-initial');
        }
      });
    },
    { threshold: 0.1 }
  );

  // 观察需要动画效果的元素
  setTimeout(() => {
    document.querySelectorAll('.grid-item, .role-card, .stat-item, .bento-grid > div').forEach((item) => {
      item.classList.add('scroll-fade-initial');
      observer.observe(item);
    });
  }, 100);
}

// 页面刷新后跳转到指定锚点位置
function handleHashNavigation() {
  const hash = window.location.hash;
  if (hash) {
    // 使用setTimeout确保在DOM完全加载后执行跳转
    setTimeout(() => {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

// 在DOM加载完成后初始化滚动动画
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  handleHashNavigation();
});
