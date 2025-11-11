<script setup lang="ts">
import { ref, onMounted } from 'vue';

const companyDays = ref(21);

// 计算公司成立天数
const updateCompanyDays = () => {
  const companyDate = new Date('2025-06-10');
  const differenceInMilliseconds = Date.now() - companyDate.getTime();
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  companyDays.value = differenceInDays;
};

// 数字递增动画函数
const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// 观察统计数字元素
const observeStats = () => {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statValue = entry.target.querySelector('.stat-value') as HTMLElement;
          if (statValue) {
            const target = parseInt(statValue.innerText);
            animateValue(statValue, 0, target, 800);
          }
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  
  const statItems = document.querySelectorAll('#data .stat-item');
  statItems.forEach((item) => {
    statObserver.observe(item);
  });
};

onMounted(() => {
  updateCompanyDays();
  observeStats();
});
</script>

<template>
  <section class="container mx-auto py-16 px-4" id="data">
    <h2 class="section-title text-center text-4xl md:text-5xl">数据分析</h2>
    <p class="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">灵动智算运营数据，让您更快速的以数据指标了解我们</p>

    <div class="stats-container">
      <div class="stat-item">
        <div class="stat-value text-3xl md:text-4xl">{{ companyDays }}</div>
        <div class="text-base md:text-lg font-medium">成立天数</div>
        <div class="text-gray-400 mt-2 text-xs md:text-sm">公司自2025年06月10日创办至今</div>
      </div>

      <div class="stat-item">
        <div class="stat-value text-3xl md:text-4xl">3</div>
        <div class="text-base md:text-lg font-medium">服务客户</div>
        <div class="text-gray-400 mt-2 text-xs md:text-sm">截至目前服务客户数</div>
      </div>

      <div class="stat-item">
        <div class="stat-value text-3xl md:text-4xl">6</div>
        <div class="text-base md:text-lg font-medium">承接项目</div>
        <div class="text-gray-400 mt-2 text-xs md:text-sm">截止目前承接项目数</div>
      </div>

      <div class="stat-item">
        <div style="display: flex; justify-content: center; align-items: center">
          <div class="stat-value text-3xl md:text-4xl">56</div>
          <div class="text-2xl md:text-3xl">%</div>
        </div>
        <div class="text-base md:text-lg font-medium">效率提升</div>
        <div class="text-gray-400 mt-2 text-xs md:text-sm">协助企业平均提升效率</div>
      </div>
    </div>

    <div
      class="max-w-4xl mx-auto mt-12 p-6 bg-cardBg rounded-3xl role-card hover:border-geminiBlue/50 transition-colors">
      <div class="text-center mb-6">
        <div class="icon-circle inline-flex w-16 h-16">
          <i class="fas fa-lightbulb text-2xl"></i>
        </div>
        <h3 class="text-xl md:text-2xl font-bold mt-4">灵感、与客户沟通、执行力。</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-darkBg rounded-xl">
          <div class="text-geminiBlue text-base md:text-lg mb-2 flex items-center">
            <i class="fas fa-cut mr-2"></i>
            <span>分解任务</span>
          </div>
          <p class="text-gray-300 text-sm">按照最终项目需求开始分解任务，逐一消化攻破。</p>
        </div>

        <div class="p-4 bg-darkBg rounded-xl">
          <div class="text-geminiGreen text-base md:text-lg mb-2 flex items-center">
            <i class="fas fa-ruler mr-2"></i>
            <span>制定计划</span>
          </div>
          <p class="text-gray-300 text-sm">团队按照具体任务制定详细计划，确保项目高效推进与目标达成。</p>
        </div>

        <div class="p-4 bg-darkBg rounded-xl">
          <div class="text-geminiYellow text-base md:text-lg mb-2 flex items-center">
            <i class="fas fa-theater-masks mr-2"></i>
            <span>分工明确</span>
          </div>
          <p class="text-gray-300 text-sm">团队分工明确，各司其职，高效协作推进项目落地。</p>
        </div>

        <div class="p-4 bg-darkBg rounded-xl">
          <div class="text-geminiRed text-base md:text-lg mb-2 flex items-center">
            <i class="fas fa-comments mr-2"></i>
            <span>迭代改进</span>
          </div>
          <p class="text-gray-300 text-sm">团队与客户持续沟通，不断迭代优化方案，确保精准满足需求。</p>
        </div>
      </div>
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

.stats-container {
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 20px;
  min-width: 200px;
}

.stat-value {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
  background: linear-gradient(to right, #4285f4, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>