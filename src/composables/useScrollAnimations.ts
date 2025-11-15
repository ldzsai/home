import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

// 滚动动画和锚点跳转的composable
export function useScrollAnimations() {
  const route = useRoute()
  const activeSection = ref('')
  let observer: IntersectionObserver | null = null
  let styleElement: HTMLStyleElement | null = null
  
  // 初始化滚动动画
  const initScrollAnimations = () => {
    // 添加自定义动画样式（只添加一次）
    if (!styleElement) {
      const existingStyle = document.head.querySelector('#scroll-animation-style');
      if (existingStyle) {
        styleElement = existingStyle as HTMLStyleElement;
      } else {
        styleElement = document.createElement('style');
        styleElement.id = 'scroll-animation-style';
        styleElement.textContent = `
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .animate-in {
            opacity: 1;
            transform: translateY(0);
          }
        `;
        document.head.appendChild(styleElement);
      }
    }
    
    // 如果已有观察器，先断开连接
    if (observer) {
      observer.disconnect();
    }
    
    // 创建 Intersection Observer 来检测元素何时进入视口
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 当元素进入视口时添加动画类
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('opacity-0')
            
            // 如果是 section 元素，则更新活动区域
            const section = entry.target as HTMLElement
            if (section.id) {
              // 存储到 sessionStorage
              sessionStorage.setItem('activeSection', section.id)
            }
          }
        })
      },
      {
        // 配置观察选项
        threshold: 0.1, // 当 10% 的元素可见时触发
        rootMargin: '-10% 0px -20% 0px' // 使用自定义边距
      }
    )
    
    // 观察所有带动画的元素
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0')
      observer?.observe(el)
    })
    
    // 初始化时计算当前活动区域
    updateActiveSection()
    
    // 添加滚动事件监听器
    window.addEventListener('scroll', updateActiveSection)
  }
  
  // 处理 hash 导航
  const handleHashNavigation = () => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  // 更新活动区域
  const updateActiveSection = () => {
    // 获取所有带有 ID 的 section 元素
    const sections = document.querySelectorAll('section[id]')
    if (sections.length === 0) return
    
    // 查找第一个进入视口的 section
    let currentSection = ''
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement
      const rect = section.getBoundingClientRect()
      
      // 如果 section 在视口中，则将其设为当前活动 section
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id
        break
      }
    }
    
    // 如果没有找到基于位置的活动 section，则使用第一个 section
    if (!currentSection && sections[0]) {
      currentSection = (sections[0] as HTMLElement).id
    }
    
    // 更新活动 section
    if (currentSection) {
      activeSection.value = currentSection
      
      // 更新 sessionStorage
      sessionStorage.setItem('activeSection', currentSection)
    }
  }
  
  // 清理函数
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    window.removeEventListener('scroll', updateActiveSection)
  }
  
  // 在组件卸载时清理
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    activeSection,
    initScrollAnimations,
    handleHashNavigation,
    updateActiveSection,
    cleanup
  }
}