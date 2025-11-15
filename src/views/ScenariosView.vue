<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'))
const PageFooter = defineAsyncComponent(() => import('@/components/PageFooter.vue'))

const router = useRouter()

onMounted(() => {
  // 初始化滚动位置
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="scenarios-page">
    <Navbar />
    
    <section class="py-24 px-4 md:px-8">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">更多应用场景</h1>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            探索我们提供的全方位技术解决方案，深入了解各行业的创新应用案例
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 场景卡片1 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
                <i class="fas fa-microchip text-geminiBlue"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智能制造</h3>
            </div>
            <p class="text-gray-300 mb-4">
              结合工业物联网与人工智能技术，实现生产过程自动化、质量控制智能化和设备维护预测化，全面提升制造业效率与产品质量。
            </p>
            <div class="mt-4">
              <div class="pill">工业4.0</div>
              <div class="pill">边缘计算</div>
              <div class="pill">机器视觉</div>
            </div>
          </div>

          <!-- 场景卡片2 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiGreen/20 flex items-center justify-center">
                <i class="fas fa-robot text-geminiGreen"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智慧医疗</h3>
            </div>
            <p class="text-gray-300 mb-4">
              利用AI辅助诊断、远程医疗和健康数据分析技术，提升诊疗效率和精准度，改善患者体验，推动医疗服务数字化转型。
            </p>
            <div class="mt-4">
              <div class="pill">医学影像</div>
              <div class="pill">远程会诊</div>
              <div class="pill">健康管理</div>
            </div>
          </div>

          <!-- 场景卡片3 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiYellow/20 flex items-center justify-center">
                <i class="fas fa-link text-geminiYellow"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">数字金融</h3>
            </div>
            <p class="text-gray-300 mb-4">
              构建安全可靠的金融科技平台，提供智能风控、区块链存证和数字身份认证服务，保障交易安全并提升金融服务效率。
            </p>
            <div class="mt-4">
              <div class="pill">风控模型</div>
              <div class="pill">区块链</div>
              <div class="pill">数字支付</div>
            </div>
          </div>

          <!-- 场景卡片4 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiPurple/20 flex items-center justify-center">
                <i class="fas fa-city text-geminiPurple"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智慧城市</h3>
            </div>
            <p class="text-gray-300 mb-4">
              整合城市各类数据资源，通过大数据分析和AI算法优化城市管理，涵盖交通调度、环境监测、公共安全等多个领域。
            </p>
            <div class="mt-4">
              <div class="pill">城市大脑</div>
              <div class="pill">IoT感知</div>
              <div class="pill">数据治理</div>
            </div>
          </div>

          <!-- 场景卡片5 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiPink/20 flex items-center justify-center">
                <i class="fas fa-shopping-cart text-geminiPink"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智慧零售</h3>
            </div>
            <p class="text-gray-300 mb-4">
              运用计算机视觉和大数据分析技术，实现客流统计、商品识别和个性化推荐，提升消费者购物体验和商家运营效率。
            </p>
            <div class="mt-4">
              <div class="pill">无人零售</div>
              <div class="pill">客流分析</div>
              <div class="pill">精准营销</div>
            </div>
          </div>

          <!-- 场景卡片6 -->
          <div class="scenario-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiTeal/20 flex items-center justify-center">
                <i class="fas fa-car text-geminiTeal"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智慧交通</h3>
            </div>
            <p class="text-gray-300 mb-4">
              基于车联网和AI算法，实现智能驾驶辅助、交通流量优化和出行路径规划，提升交通安全性和通行效率。
            </p>
            <div class="mt-4">
              <div class="pill">自动驾驶</div>
              <div class="pill">V2X通信</div>
              <div class="pill">路径规划</div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <button 
            @click="router.back()"
            class="inline-flex items-center bg-geminiBlue hover:bg-geminiBlue/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            <i class="fas fa-arrow-left mr-2"></i>
            返回首页
          </button>
        </div>
      </div>
    </section>

    <PageFooter />
  </div>
</template>

<style scoped>
.scenario-card {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-color: rgba(66, 133, 244, 0.3);
}

.pill {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 8px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>