<template>
  <div>
    <div className="chart-container">
      <canvas ref="lineChart" v-bind:width="chartWidth" v-bind:height="chartHeight"></canvas>
    </div>
  </div>
</template>
<script>
import {Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement} from 'chart.js';

Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement);

export default {
  name: 'LineChart',
  props: {
    chartWidth: {
      type: Number,
      default: 800
    },
    chartHeight: {
      type: Number,
      default: 350
    },
    data: {
      type: Object,
      require: true
    },
    displayLegend: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.createLineChart();
  },
  methods: {
    createLineChart() {
      const ctx = this.$refs.lineChart;
      this.chart = new Chart(ctx, {
        type: 'line',
        data: this.data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: this.displayLegend
            }
          }
        },
      });
    },
  },
};
</script>
<style scoped>
.chart-container {
  position: relative;
  max-width: 800px;
  max-height: 350px;
}
</style>
