<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

const isWechatPopupVisible = ref(false);

// 检测是否为触摸设备
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const handleWechatInteraction = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  
  if (isTouchDevice()) {
    // 移动端使用点击事件
    isWechatPopupVisible.value = !isWechatPopupVisible.value;
  } else {
    // 桌面端使用悬停事件逻辑在模板中处理
    isWechatPopupVisible.value = true;
  }
};

const hideWechatPopup = (e: Event) => {
  // 只在移动端隐藏弹窗
  if (isTouchDevice()) {
    const target = e.target as HTMLElement;
    const wechatLink = document.getElementById('wechat-link');
    
    if (wechatLink && !wechatLink.contains(target)) {
      isWechatPopupVisible.value = false;
    }
  }
};

const handleMouseEnter = () => {
  if (!isTouchDevice()) {
    isWechatPopupVisible.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isTouchDevice()) {
    isWechatPopupVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', hideWechatPopup);
});

onUnmounted(() => {
  document.removeEventListener('click', hideWechatPopup);
});
</script>

<template>
  <footer class="footer py-16 bg-gradient-to-t from-darkBg to-cardBg/50 border-t border-cardBg/30">
    <div class="container mx-auto px-4">
      <div class="flex justify-center space-x-8 mb-8">
        <!-- Github -->
        <a href="https://github.com/ldzsai" target="_blank"
          class="text-gray-400 hover:text-white transition transform hover:scale-110">
          <i class="fab fa-github text-3xl"></i>
        </a>

        <!-- 微信公众号二维码弹窗 -->
        <a class="text-gray-400 hover:text-white transition transform hover:scale-110 relative"
          id="wechat-link" 
          @click="handleWechatInteraction"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave">
          <i class="fab fa-weixin text-3xl"></i>
          <div id="wechat-qr-popup"
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
            :class="{ 'hidden': !isWechatPopupVisible }">
            <div class="bg-white p-3 rounded-lg shadow-xl border border-gray-200">
              <img src="@/assets/wechat-qr.png" alt="微信二维码" class="w-48 h-auto max-w-xs">
            </div>
            <div
              class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 border-8 border-transparent border-t-white">
            </div>
          </div>
        </a>
      </div>

      <p class="text-gray-400 text-center mb-6">© {{ currentYear }} 灵动智算(西安)科技有限公司 . 保留所有权利。</p>
      <p class="text-gray-500 text-sm max-w-2xl mx-auto text-center mb-8">
        “用科技赋能未来”，致力于通过创新的AI技术推动社会进步与产业升级，为各行业量身定制高效、智能的解决方案，助力行业实现数字化转型与跨越式发展。
      </p>

      <!-- 备案信息 -->
      <div class="mt-6 flex flex-wrap justify-center items-center gap-4">
        <img src="@/assets/beian-logo.png" alt="备案图标" class="w-4 h-4" />
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=61019002003337" target="_blank"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition">
          陕公网安备61019002003337号
        </a>
        <a href="https://beian.miit.gov.cn" target="_blank"
          class="flex items-center space-x-2 text-gray-400 hover:text-white transition">
          陕ICP备2025070934号-1
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
}
</style>