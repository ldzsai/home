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
  <div class="projects-page">
    <Navbar />

    <section class="py-24 px-4 md:px-8">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">更多项目案例</h1>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            探索我们完成的更多项目案例，了解我们在各个领域的技术实力和解决方案
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 项目卡片1 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
                <i class="fas fa-graduation-cap text-geminiBlue"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智慧校园</h3>
            </div>
            <p class="text-gray-300 mb-4">
              协助家长实时监测学生在校情况，通过数字化形式动态展示，智能推送学生上课状态，如是否迟到，利用电子围栏检测学生上课期间是否在校园内。
            </p>
            <div class="mt-4">
              <div class="pill">分布式</div>
              <div class="pill">Gateway</div>
              <div class="pill">RabbitMQ</div>
              <div class="pill">Redis</div>
              <div class="pill">分布式缓存</div>
            </div>
          </div>

          <!-- 项目卡片2 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
                <i class="fas fa-spider text-geminiBlue"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智能分布式爬虫系统</h3>
            </div>
            <p class="text-gray-300 mb-4">
              以图形化方式定义爬虫流程，无需代码即可实现一个爬虫流程，不仅限爬虫，也可用于WEB自动化测试。
            </p>
            <div class="mt-4">
              <div class="pill">分布式</div>
              <div class="pill">爬虫</div>
              <div class="pill">Selenium</div>
              <div class="pill">WEB自动化测试</div>
            </div>
          </div>

          <!-- 项目卡片3 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiGreen/20 flex items-center justify-center">
                <i class="fas fa-shopping-cart text-geminiGreen"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">电商平台推荐系统</h3>
            </div>
            <p class="text-gray-300 mb-4">
              基于用户行为分析和机器学习算法，为电商平台提供个性化商品推荐，显著提升用户转化率和购买体验。
            </p>
            <div class="mt-4">
              <div class="pill">推荐算法</div>
              <div class="pill">用户画像</div>
              <div class="pill">实时计算</div>
              <div class="pill">A/B测试</div>
            </div>
          </div>

          <!-- 项目卡片4 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiYellow/20 flex items-center justify-center">
                <i class="fas fa-heartbeat text-geminiYellow"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">医疗健康管理系统</h3>
            </div>
            <p class="text-gray-300 mb-4">
              集成电子病历、预约挂号、远程诊疗等功能的一体化医疗健康平台，提升医疗服务效率和患者体验。
            </p>
            <div class="mt-4">
              <div class="pill">电子病历</div>
              <div class="pill">远程诊疗</div>
              <div class="pill">数据安全</div>
              <div class="pill">合规性</div>
            </div>
          </div>

          <!-- 项目卡片5 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiPurple/20 flex items-center justify-center">
                <i class="fas fa-car text-geminiPurple"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">智能交通调度系统</h3>
            </div>
            <p class="text-gray-300 mb-4">
              利用大数据和AI算法优化城市交通流量，实现智能红绿灯控制和公交线路调度，有效缓解交通拥堵。
            </p>
            <div class="mt-4">
              <div class="pill">交通预测</div>
              <div class="pill">实时调度</div>
              <div class="pill">IoT集成</div>
              <div class="pill">数据分析</div>
            </div>
          </div>

          <!-- 项目卡片6 -->
          <div class="project-card group">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-geminiPink/20 flex items-center justify-center">
                <i class="fas fa-chart-line text-geminiPink"></i>
              </div>
              <h3 class="text-xl font-bold ml-3">金融风控分析平台</h3>
            </div>
            <p class="text-gray-300 mb-4">
              基于机器学习和大数据技术构建的实时风控系统，能够有效识别和预防金融欺诈行为，保障资金安全。
            </p>
            <div class="mt-4">
              <div class="pill">风险建模</div>
              <div class="pill">实时监控</div>
              <div class="pill">欺诈检测</div>
              <div class="pill">合规报告</div>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <button @click="router.back()"
            class="inline-flex items-center bg-geminiBlue hover:bg-geminiBlue/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
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
.project-card {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.project-card:hover {
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