<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

/**
 * 粒子接口定义
 * 用于描述每个粒子的属性
 */
interface Particle {
  x: number;                 // 粒子在画布上的x坐标
  y: number;                 // 粒子在画布上的y坐标
  size: number;              // 粒子当前大小
  originalSize: number;      // 粒子原始大小
  speedX: number;            // 粒子在X轴上的移动速度
  speedY: number;            // 粒子在Y轴上的移动速度
  color: string;             // 粒子颜色
  angle: number;             // 粒子移动角度
  radius: number;            // 粒子移动半径
  opacity: number;           // 粒子透明度（用于光晕效果）
  opacityDirection: number;  // 透明度变化方向（1为增加，-1为减少）
  pulseSpeed: number;        // 光晕闪烁速度
}

const canvasRef = ref<HTMLCanvasElement | null>(null);
const particles = ref<Particle[]>([]);
const animationId = ref<number | null>(null);
const particleCount = 65;

// 获取设备像素比
const getPixelRatio = () => {
  return window.devicePixelRatio || 1;
};

// 创建粒子
const createParticles = () => {
  particles.value = [];
  const colors = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#8B5CF6', '#00f0ff', '#ff00c8'];
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 3 + 0.5;
    particles.value.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: size,
      originalSize: size,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 50 + 50,
      opacity: Math.random(),
      opacityDirection: Math.random() > 0.5 ? 1 : -1,
      pulseSpeed: Math.min(...[0.08, Math.random() * 0.01]) // 闪烁速度
    });
  }
};

// 调整画布大小
const resizeCanvas = () => {
  if (canvasRef.value) {
    const pixelRatio = getPixelRatio();
    canvasRef.value.width = window.innerWidth * pixelRatio;
    canvasRef.value.height = window.innerHeight * pixelRatio;
    canvasRef.value.style.width = window.innerWidth + 'px';
    canvasRef.value.style.height = window.innerHeight + 'px';
    
    const ctx = canvasRef.value.getContext('2d');
    if (ctx) {
      ctx.scale(pixelRatio, pixelRatio);
    }
  }
};

// 绘制粒子
const drawParticles = () => {
  if (!canvasRef.value) return;
  
  const ctx = canvasRef.value.getContext('2d');
  if (!ctx) return;
  
  // 清空画布
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  
  // 更新和绘制每个粒子
  particles.value.forEach(particle => {
    // 更新粒子位置 - 创建浮动效果
    particle.angle += 0.01;
    particle.x += Math.cos(particle.angle) * 0.5;
    particle.y += Math.sin(particle.angle) * 0.5;
    
    // 更新粒子透明度 - 创建闪烁效果（仅用于光晕）
    particle.opacity += particle.pulseSpeed * particle.opacityDirection;
    if (particle.opacity >= 1 || particle.opacity <= 0.1) {
      particle.opacityDirection *= -1;
    }
    
    // 边界检查
    if (particle.x < 0 || particle.x > window.innerWidth) {
      particle.angle = Math.PI - particle.angle;
    }
    if (particle.y < 0 || particle.y > window.innerHeight) {
      particle.angle = -particle.angle;
    }
    
    // 绘制多层光晕，从中心点逐步向周围散开
    const maxRadius = particle.size * 6;
    
    // 第一层光晕 - 最亮，最小范围
    const gradient1 = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 2
    );
    gradient1.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient1;
    ctx.globalAlpha = particle.opacity * 0.7;
    ctx.fill();
    
    // 第二层光晕 - 中等亮度，中等范围
    const gradient2 = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size * 4
    );
    gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
    ctx.fillStyle = gradient2;
    ctx.globalAlpha = particle.opacity * 0.4;
    ctx.fill();
    
    // 第三层光晕 - 最暗，最大范围
    const gradient3 = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, maxRadius
    );
    gradient3.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    gradient3.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, maxRadius, 0, Math.PI * 2);
    ctx.fillStyle = gradient3;
    ctx.globalAlpha = particle.opacity * 0.2;
    ctx.fill();
    
    // 绘制粒子核心 - 保持原有颜色，不闪烁
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.globalAlpha = 1; // 核心粒子不透明度固定为1
    ctx.fill();
  });
  
  // 重置全局透明度
  ctx.globalAlpha = 1;
};

// 动画循环
const animate = () => {
  drawParticles();
  animationId.value = requestAnimationFrame(animate);
};

// 处理窗口大小调整
const handleResize = () => {
  resizeCanvas();
  createParticles();
};

onMounted(() => {
  resizeCanvas();
  createParticles();
  animate();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <canvas 
    ref="canvasRef" 
    class="particles"
  ></canvas>
</template>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>