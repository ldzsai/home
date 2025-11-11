import { onMounted, nextTick } from 'vue'

// 滚动动画和锚点跳转的composable
export function useScrollAnimations() {
  // 初始化滚动动画
  const initScrollAnimations = () => {
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

  // 处理锚点跳转
  const handleHashNavigation = async () => {
    const hash = window.location.hash;
    if (hash) {
      // 等待下一个DOM更新周期
      await nextTick();
      
      // 再等待一小段时间确保DOM完全渲染
      setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  // 在组件挂载时初始化
  const mount = () => {
    onMounted(() => {
      initScrollAnimations();
      handleHashNavigation();
    });
  }

  return {
    mount,
    initScrollAnimations,
    handleHashNavigation
  }
}