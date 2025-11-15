<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="container mx-auto py-16 px-4" id="applications">
    <h2 class="section-title text-center text-4xl md:text-5xl">应用场景</h2>
    <p class="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12">焦距前沿技术，提供创新且高效的数字化解决方案。</p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="role-card hover:border-geminiBlue/50 transition-colors">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-geminiBlue/20 flex items-center justify-center">
            <i class="fas fa-microchip text-geminiBlue"></i>
          </div>
          <h3 class="text-xl font-bold ml-3">物联网</h3>
        </div>
        <p class="text-gray-300 mb-4 text-sm md:text-base">
          构建智能物联生态系统，通过边缘计算与5G技术实现设备实时互联。工业物联网平台可采集多维度设备数据，结合AI分析实现预测性维护，降低运维成本30%以上。</p>
        <div class="mt-4">
          <div class="pill">IOT</div>
          <div class="pill">5G</div>
          <div class="pill">嵌入式</div>
          <div class="pill">...</div>
        </div>
      </div>

      <div class="role-card hover:border-geminiBlue/50 transition-colors">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-geminiGreen/20 flex items-center justify-center">
            <i class="fas fa-robot text-geminiGreen"></i>
          </div>
          <h3 class="text-xl font-bold ml-3">AI赋能</h3>
        </div>
        <p class="text-gray-300 mb-4 text-sm md:text-base">打造智能决策系统，基于深度学习算法实现图像识别、自然语言处理与智能推荐，助力企业提升运营效率。</p>
        <div class="mt-4">
          <div class="pill">AIGC</div>
          <div class="pill">Comfyui</div>
          <div class="pill">语音合成</div>
          <div class="pill">人脸识别</div>
          <div class="pill">...</div>
        </div>
      </div>

      <div class="role-card hover:border-geminiBlue/50 transition-colors">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-full bg-geminiYellow/20 flex items-center justify-center">
            <i class="fas fa-link text-geminiYellow"></i>
          </div>
          <h3 class="text-xl font-bold ml-3">区块链</h3>
        </div>
        <p class="text-gray-300 mb-4 text-sm md:text-base">
          构建分布式账本系统，实现供应链金融、数字身份认证等场景的可信数据存证。联盟链架构支持多方协同，数据不可篡改，满足金融、政务等领域合规性要求。</p>
        <div class="mt-4">
          <div class="pill">分布式计算</div>
          <div class="pill">可信网络</div>
          <div class="pill">...</div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <button
        @click="router.push('/scenarios')"
        class="inline-block bg-geminiBlue hover:bg-geminiBlue/90 text-white font-medium py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm md:text-base">
        探索更多
        <i class="fas fa-arrow-right ml-2"></i>
      </button>
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