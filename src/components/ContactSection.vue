<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  phone: '',
  type: '',
  message: ''
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log('Form submitted:', form.value);
  // 这里可以添加表单提交逻辑
};
</script>

<template>
  <section class="container mx-auto py-16 px-4" id="contact">
    <h2 class="section-title text-center mb-4 text-4xl md:text-5xl">即刻联系</h2>
    <p class="text-lg md:text-xl text-center text-gray-300 max-w-2xl mx-auto mb-12">欢迎通过以下方式与我们取得联系，24小时内必回复，期待与您合作！
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- 左侧联系信息 -->
      <div class="lg:col-span-2 space-y-6">
        <div class="role-card p-6 hover:border-geminiBlue/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-2xl bg-geminiBlue/20 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-comments text-xl text-geminiBlue"></i>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold mb-2">即时沟通</h3>
              <div class="space-y-1 text-gray-300">
                <p class="flex items-center text-sm">
                  <i class="fas fa-envelope w-5 text-xs"></i>
                  contact@ldzsai.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="role-card p-6 hover:border-geminiGreen/50 transition-colors">
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 rounded-2xl bg-geminiGreen/20 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-map-marked-alt text-xl text-geminiGreen"></i>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-bold mb-2">到访指引</h3>
              <div class="text-gray-300 space-y-1">
                <p class="text-sm"><i
                    class="fas fa-building w-5 text-xs"></i>陕西省西安市高新区天谷七路88号新加坡腾飞科汇城6层601室-675</p>
                <p class="text-sm"><i class="fas fa-clock w-5 text-xs"></i>周一至周五 9:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧表单 -->
      <div class="role-card p-6 lg:col-span-3 hover:border-geminiYellow/50 transition-colors">
        <form class="space-y-4" @submit="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">您的姓名 <span
                  class="text-geminiRed">*</span></label>
              <input type="text" v-model="form.name"
                class="w-full bg-darkBg/50 rounded-lg px-3 py-2 text-sm border border-cardBg focus:border-geminiBlue focus:ring-2 focus:ring-geminiBlue/30 placeholder-gray-500 transition-all"
                placeholder="请输入真实姓名" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">联系电话 <span
                  class="text-geminiRed">*</span></label>
              <input type="tel" v-model="form.phone"
                class="w-full bg-darkBg/50 rounded-lg px-3 py-2 text-sm border border-cardBg focus:border-geminiBlue focus:ring-2 focus:ring-geminiBlue/30 placeholder-gray-500 transition-all"
                placeholder="请输入手机号码" required />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">咨询类型 <span
                class="text-geminiRed">*</span></label>
            <select v-model="form.type"
              class="w-full bg-darkBg/50 rounded-lg px-3 py-2 text-sm border border-cardBg focus:border-geminiBlue focus:ring-2 focus:ring-geminiBlue/30 text-gray-300 appearance-none"
              required>
              <option value="">请选择咨询类型</option>
              <option>产品咨询</option>
              <option>技术支持</option>
              <option>商务合作</option>
              <option>其他事项</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">详细内容 <span
                class="text-geminiRed">*</span></label>
            <textarea v-model="form.message"
              class="w-full bg-darkBg/50 rounded-lg px-3 py-2 text-sm border border-cardBg focus:border-geminiBlue focus:ring-2 focus:ring-geminiBlue/30 placeholder-gray-500 transition-all"
              rows="4" placeholder="请详细描述您的需求..." required></textarea>
          </div>

          <button type="submit"
            class="w-full bg-gradient-to-r from-geminiBlue to-geminiGreen hover:from-geminiBlue/90 hover:to-geminiGreen/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-geminiBlue/20 text-sm">
            <i class="fas fa-paper-plane mr-2"></i>
            立即发送
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
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
</style>