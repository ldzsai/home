<script setup lang="ts">
</script>

<template>
  <section class="container mx-auto py-16 px-4" id="team">
    <h2 class="section-title text-center text-4xl md:text-5xl">团队介绍</h2>
    <p class="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">团队由资深设计师和开发者组成，致力于打造卓越的用户体验。</p>

    <div class="bento-grid">
      <div class="grid-item col-span-2 row-span-1 role-card hover:border-geminiBlue/50 transition-colors">
        <div class="highlight-gradient"></div>
        <div class="big-number">01</div>
        <div class="relative z-10">
          <div class="text-geminiBlue text-base md:text-lg mb-2">CEO、CTO</div>
          <div class="big-text text-4xl md:text-5xl">拔剑</div>
          <div class="text-gray-300 mt-4 text-sm md:text-base max-w-md">
            负责公司战略与发展方向，主导技术战略规划与系统架构设计，引领高性能分布式系统研发，攻克关键核心技术难题。</div>
        </div>
      </div>

      <div class="grid-item role-card hover:border-geminiBlue/50 transition-colors">
        <div class="highlight-gradient"></div>
        <div class="big-number">02</div>
        <div class="relative z-10">
          <div class="text-geminiGreen text-base md:text-lg mb-2">市场营销</div>
          <div class="big-text text-4xl">茗菌</div>
          <div class="text-gray-300 mt-4 text-sm md:text-base">制定全渠道营销策略，通过数据驱动提升品牌影响力与市场渗透率。</div>
        </div>
      </div>

      <div class="grid-item role-card hover:border-geminiBlue/50 transition-colors">
        <div class="highlight-gradient"></div>
        <div class="big-number">03</div>
        <div class="relative z-10">
          <div class="text-geminiYellow text-base md:text-lg mb-2">商务总监</div>
          <div class="big-text text-4xl">不羁</div>
          <div class="text-gray-300 mt-4 text-sm md:text-base">开拓战略合作渠道，推动产品市场覆盖，构建企业级合作生态体系。</div>
        </div>
      </div>

      <div class="grid-item role-card hover:border-geminiBlue/50 transition-colors">
        <div class="highlight-gradient"></div>
        <div class="big-number">04</div>
        <div class="relative z-10">
          <div class="text-geminiRed text-base md:text-lg mb-2">技术总监</div>
          <div class="big-text text-4xl">令狐</div>
          <div class="text-gray-300 mt-4 text-sm md:text-base">领导技术架构演进与研发创新，推动前沿技术落地，解决高复杂性技术挑战。</div>
        </div>
      </div>

      <div class="grid-item col-span-2 role-card hover:border-geminiBlue/50 transition-colors">
        <div class="highlight-gradient"></div>
        <div class="big-number">N</div>
        <div class="relative z-10">
          <div class="text-lg mb-2">期待您</div>
          <div class="big-text text-4xl md:text-5xl">加入我们</div>
          <div class="text-gray-300 mt-4 text-sm md:text-base max-w-md">加入年轻团队实现共赢，追寻我们的梦想。</div>
          <div class="mt-4 p-3 bg-cardBg rounded-xl w-full max-w-xs">
            <div class="text-xs md:text-sm font-mono text-gray-400">
              <span class="text-geminiBlue">你是一名</span>[AI/软件]的项目经理。<br />
              <span class="text-geminiGreen">你是一名</span>[UI/UX]设计师<br />
              <span class="text-geminiYellow">你是一名</span>资深开发工程师<br />
            </div>
          </div>
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

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 24px;
  padding: 24px;
}

@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-grid {
    display: block;
  }

  .bento-grid .grid-item:nth-child(n+2) {
    margin-top: 24px;
  }
}

.grid-item {
  border-radius: 20px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  background-color: #1e293b;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.highlight-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(66, 133, 244, 0.15) 0%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

.grid-item:nth-child(2) .highlight-gradient {
  background: radial-gradient(circle at center, rgba(52, 168, 83, 0.15) 0%, transparent 70%);
}

.grid-item:nth-child(3) .highlight-gradient {
  background: radial-gradient(circle at center, rgba(251, 188, 5, 0.15) 0%, transparent 70%);
}

.grid-item:nth-child(4) .highlight-gradient {
  background: radial-gradient(circle at center, rgba(234, 67, 53, 0.15) 0%, transparent 70%);
}

.grid-item:nth-child(5) .highlight-gradient {
  background: radial-gradient(circle at center, rgba(101, 73, 255, 0.15) 0%, transparent 70%);
}

.big-number {
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  opacity: 0.1;
  position: absolute;
  bottom: -20px;
  right: 20px;
  z-index: 0;
}

.big-text {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
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
</style>