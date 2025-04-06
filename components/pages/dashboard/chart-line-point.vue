<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
    <div class="w-full flex items-center justify-center gap-1 mt-2">
      <div class="size-3 bg-[#15C0E619] rounded-[2px]"></div>
      <p class="text-[#91929E] text-[0.75rem] font-medium leading-[120%] mr-2">Healthy</p>
      <div class="size-3 bg-[#D11A2A] rounded-[2px]"></div>
      <p class="text-[#91929E] text-[0.75rem] font-medium leading-[120%]">Critical (> 95%)</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {shallowRef, ref, onMounted, onUnmounted} from 'vue'
import {Line} from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import socketInstance from '@/socket/index'
import {getCurrentFormatTimestamp} from "~/utils/time";
import {TIME_SOCKET} from "~/constant";


defineComponent({name: 'ChartLinePoint'})

const route = useRoute()
const AMOUNT_POINT = 10
// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale
)
// **Tạo Plugin để Tùy chỉnh nền (background)**
const customBackgroundPlugin = {
  id: 'customBackgroundPlugin', // ID của plugin
  beforeDraw(chart) {
    if (chart.config.type !== 'line' && route.path === '/') {
      return
    }

    const { ctx, chartArea, scales } = chart // Context và thông tin vùng chart
    const yScale = scales.y // Trục Y
    if (!chartArea) {
      return
    }

    // Vẽ vùng màu Xanh (Green) [0% - 95%]
    const greenAreaStart = yScale.getPixelForValue(95) // Pixel của giá trị 95% trên trục Y
    ctx.save()
    ctx.fillStyle = '#15C0E619'
    ctx.fillRect(
        chartArea.left, // Bắt đầu từ mép bên trái
        greenAreaStart, // Bắt đầu từ điểm 95%
        chartArea.right - chartArea.left, // Chiều rộng
        chartArea.bottom - greenAreaStart // Chiều cao của vùng xanh
    )

    // Vẽ vùng màu Đỏ (Red) [95% - 100%]
    ctx.fillStyle = '#D11A2A'
    ctx.fillRect(
        chartArea.left, // Bắt đầu từ mép bên trái
        chartArea.top, // Bắt đầu từ đỉnh của chart (100%)
        chartArea.right - chartArea.left, // Chiều rộng
        greenAreaStart - chartArea.top // Chiều cao của vùng đỏ
    )
    ctx.restore()
  }
}
ChartJS.register(customBackgroundPlugin)

const datasetsOther = {
  borderWidth: 2,
  borderColor: '#f46584',
  backgroundColor: '#fab1c1',
  pointRadius: 5,
  pointHoverRadius: 7,
  fill: true, // Không tô màu dưới đường,
  tension: 0.4,
}

// Khởi tạo dữ liệu biểu đồ
const chartData = shallowRef({
  labels: [], // Trục X
  datasets: [{
    label: 'Memory Used (%) vs Device Time',
    data: [], // Trục Y
    ...datasetsOther,
  }]
})

// Cấu hình biểu đồ
const chartOptions = ref({
  responsive: true,
  aspectRatio: 5 / 4,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: true,
      text: 'Memory Used (%) vs Device Time'
    }
  },
  scales: {
    y: {
      beginAtZero: true, // Trục Y bắt đầu từ 0
      max: 100,
      ticks: {
        stepSize: 25,
        callback: (value: number) => `${value}%` // Hậu tố là %
      }
    }
  }
})

// Biến để dừng Interval
const intervalId = ref<number | null>(null)

// Chạy giả lập khi component được mount
onMounted(() => {
  intervalId.value = setInterval(() => {
    const time = getCurrentFormatTimestamp('mm:ss')
    const percent = getRandomNumber(0, 100)
    updateChart(time, percent)
  }, TIME_SOCKET)

})

const updateChart = (time: string, percent: number) => {
  const currentLabels = chartData.value.labels
  const currentData = chartData.value.datasets[0].data
  // Thêm thời gian và giá trị mới
  const newLabels = [...currentLabels, time]
  const newData = [...currentData, percent]

  const maxPoints = AMOUNT_POINT
  if (newLabels.length > maxPoints) {
    newLabels.shift() // Xóa label cũ nhất
    newData.shift()   // Xóa data cũ nhất
  }

  chartData.value = {
    labels: newLabels, // Trục X
    datasets: [{
      label: '',
      data: newData, // Trục Y
      ...datasetsOther,
    }]
  }
}

// Xóa interval khi component bị unmounted
onMounted(() => {
  socketInstance.connect()
  socketInstance.on('message', (data: any) => {
     // code ham update o day
  })
})
onUnmounted(() => {
  socketInstance.disconnect() // Ngắt kết nối khỏi server
  clearInterval(intervalId.value)
})

</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 350px;
  margin: auto;
}
</style>
