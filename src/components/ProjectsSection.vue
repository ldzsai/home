<script setup lang="ts">
</script>

<template>
  <section class="container mx-auto py-16 px-4" id="projects">
    <h2 class="section-title text-center text-4xl md:text-5xl">项目案例</h2>
    <p class="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">
      创新设计优化用户体验与视觉呈现，技术突破助力用户需求场景高效落地。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="role-card hover:border-geminiBlue/50 transition-colors">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
            <i class="fas fa-graduation-cap text-geminiBlue"></i>
          </div>
          <h3 class="text-xl font-bold ml-3">智慧校园</h3>
        </div>
        <p class="text-gray-300 mb-4 text-sm md:text-base">
          协助家长实时监测学生在校情况，通过数字化形式动态展示，智能推送学生上课状态，如是否迟到，利用电子围栏检测学生上课期间是否在校园内。</p>
        <div class="mt-4">
          <div class="pill">分布式</div>
          <div class="pill">Gateway</div>
          <div class="pill">RabbitMQ</div>
          <div class="pill">Redis</div>
          <div class="pill">分布式缓存</div>
          <div class="pill">...</div>
        </div>
      </div>

      <div class="role-card hover:border-geminiBlue/50 transition-colors">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
            <i class="fas fa-spider text-geminiBlue"></i>
          </div>
          <h3 class="text-xl font-bold ml-3">智能分布式爬虫系统</h3>
        </div>
        <p class="text-gray-300 mb-4 text-sm md:text-base">以图形化方式定义爬虫流程，无需代码即可实现一个爬虫流程，不仅限爬虫，也可用于WEB自动化测试</p>
        <div class="mt-4">
          <div class="pill">分布式</div>
          <div class="pill">爬虫</div>
          <div class="pill">Selenium</div>
          <div class="pill">WEB自动化测试</div>
          <div class="pill">...</div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <a href="#home"
        class="inline-block bg-geminiBlue hover:bg-geminiBlue/90 text-white font-medium py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm md:text-base">
        查看更多案例
        <i class="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #4285f4, #34a853);
  border-radius: 2px;
}

.role-card {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.role-card:hover {
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