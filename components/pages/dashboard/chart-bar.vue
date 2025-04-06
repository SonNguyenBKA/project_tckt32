<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions"/>
    <div class="absolute bottom-[32px] left-[60px]">
      <span class="text-[#91929E] text-[0.75rem] font-semibold leading-[120%]">{{ formatTimestamp(getCurrentTimestamp(), 'hh:mm:ss A') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {formatTimestamp} from '@/utils/time'
import {defineComponent, ref} from 'vue'
import {Bar} from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import {getCurrentTimestamp} from "~/utils/time";
import {getRandomNumber} from "~/utils";
import {TIME_SOCKET} from "~/constant";

defineComponent({name: 'ChartBar'})

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
const chartOptions = {
  responsive: true,
  maintainAspectRatio: true, // giữ tỷ lệ phù hợp
  aspectRatio: 3 / 4, // Điều chỉnh giá trị này để thay đổi tỷ lệ
  scales: {
    y: {
      min: 0,          // Luôn bắt đầu từ 0
      max: 100,        // 👉 Chỗ này để mức tối đa luôn cố định 100
      ticks: {
        stepSize: 20,  // bước nhảy trên trục tung
        callback: (value: number) => `${value}%`
      }
    },
    x: {
      grid: {display: false}
    }

  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true, // sử dụng pointStyle để hiển thị hình vuông hoặc tròn
        pointStyle: 'rectRounded', // kiểu hình vuông bo nhẹ rất đẹp (có thể chọn 'rect', 'rectRounded', 'circle', 'cross', ...)
        padding: 12,
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
      // text: 'Ví dụ biểu đồ Bar với Chart.js',
      position: 'top',
    },
    layout: {
      padding: {top: 0, bottom: 0, backgroundColor: '#FFF'}
    }
  },
}
const chartData = ref({
  labels: [''],
  datasets: [
    {
      label: 'User',
      backgroundColor: '#FF6384',
      data: [0],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    },
    {
      label: 'System',
      backgroundColor: '#36A2EB',
      data: [0],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    },
    {
      label: 'Idle',
      backgroundColor: '#FFCE56',
      data: [0],
      barPercentage: 0.7,
      categoryPercentage: 0.7
    }
  ]
})
const intervalID = ref<number>()

const updateChart = (data: Array<number>) => {
  chartData.value = {
    labels: [''],
    datasets: [
      {
        label: 'User',
        backgroundColor: '#FF6384',
        data: [data[0]],
        barPercentage: 0.7,
        categoryPercentage: 0.7
      },
      {
        label: 'System',
        backgroundColor: '#36A2EB',
        data: [data[1]],
        barPercentage: 0.7,
        categoryPercentage: 0.7
      },
      {
        label: 'Idle',
        backgroundColor: '#FFCE56',
        data: [data[2]],
        barPercentage: 0.7,
        categoryPercentage: 0.7
      }
    ]
  }
}

const callDataChartBar = () => {
  const num1 = getRandomNumber(0, 100)
  const num2 = getRandomNumber(0, 100)
  const num3 = getRandomNumber(0, 100)
  updateChart([num1, num2, num3])
}
onMounted(() => {
  intervalID.value = setInterval(() => {
    callDataChartBar()
  }, TIME_SOCKET)
})
onUnmounted(() => {
  clearInterval(intervalID.value)
})
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  width: 100%;
  height: 280px;
  max-width: 600px;

  canvas {
    position: absolute;
    left: 0;
    height: 100% !important;
  }
}
</style>
