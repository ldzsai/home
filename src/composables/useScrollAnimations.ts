import { nextTick } from 'vue'

// 滚动动画和锚点跳转的composable
export function useScrollAnimations() {
  // 初始化滚动动画
  const initScrollAnimations = async () => {
    // 等待下一个DOM更新周期
    await nextTick();
      
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

    // 尝试多次查找元素，以适应异步组件加载的情况
    let attempts = 0;
    const maxAttempts = 10;
    
    const observeElements = () => {
      const items = document.querySelectorAll('.grid-item, .role-card, .stat-item, .bento-grid > div');
      if (items.length > 0) {
        items.forEach((item) => {
          item.classList.add('scroll-fade-initial');
          observer.observe(item);
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(observeElements, 300); // 每300ms重试一次
      }
    };

    // 开始观察元素
    observeElements();
  }

  // 处理锚点跳转
  const handleHashNavigation = async () => {
    const hash = window.location.hash;
    if (hash) {
      // 等待下一个DOM更新周期
      await nextTick();
      
      // 再等待一小段时间确保DOM完全渲染
      const scrollToElement = () => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };
      
      // 如果第一次没有找到元素，则稍后重试几次
      if (!scrollToElement()) {
        let attempts = 0;
        const maxAttempts = 10;
        
        const retryScroll = () => {
          attempts++;
          if (!scrollToElement() && attempts < maxAttempts) {
            setTimeout(retryScroll, 300);
          }
        };
        
        setTimeout(retryScroll, 300);
      }
    }
  }

  return {
    initScrollAnimations,
    handleHashNavigation
  }
}