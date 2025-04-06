<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
    <div class="absolute bottom-[30px] left-[50%] -translate-x-1/2">
      <span class="text-[0.875rem]">10:10 AM</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

defineComponent({ name: 'ChartBar' })

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: [''],
  datasets: [
    {
      label: 'Cột A',
      backgroundColor: '#FF6384',
      data: [25],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    },
    {
      label: 'Cột B',
      backgroundColor: '#36A2EB',
      data: [40],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    },
    {
      label: 'Cột C',
      backgroundColor: '#FFCE56',
      data: [30],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    }

  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true, // giữ tỷ lệ phù hợp
  aspectRatio: 3/4, // Điều chỉnh giá trị này để thay đổi tỷ lệ
  scales: {
    y: {
      min: 0,          // Luôn bắt đầu từ 0
      max: 100,        // 👉 Chỗ này để mức tối đa luôn cố định 100
      ticks: {
        stepSize: 20,  // bước nhảy trên trục tung
      }
    },
    x: {
      grid: { display: false }
    }

  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true, // sử dụng pointStyle để hiển thị hình vuông hoặc tròn
        pointStyle: 'rectRounded', // kiểu hình vuông bo nhẹ rất đẹp (có thể chọn 'rect', 'rectRounded', 'circle', 'cross', ...)
        padding: 8,
        boxHeight: 8,
        boxWidth: 8,
      },
      padding: {
        top: 11,      // Giảm khoảng cách phía trên legend
        bottom: -100,   // Giảm khoảng cách phía dưới legend (giảm khoảng cách legend với biểu đồ)
      },
    },
    title: {
      display: true,
      text: 'Ví dụ biểu đồ Bar với Chart.js',
      position: 'top',
    },
    layout: {
      padding: { top: 0, bottom: 0, backgroundColor: '#FFF' }
    }
  },
}
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  width: 100%;
  height: 280px;
  max-width: 600px;
  canvas {
    height: 100% !important;
  }
}
</style>
