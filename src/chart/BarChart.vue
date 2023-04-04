<template>
  <div>
    <div className="chart-container">
      <canvas ref="barChart" v-bind:width="chartWidth" v-bind:height="chartHeight"></canvas>
    </div>
  </div>
</template>

<script>
import {Chart, BarController, LinearScale, CategoryScale, BarElement} from 'chart.js';

Chart.register(BarController, LinearScale, CategoryScale, BarElement);

export default {
  name: 'BarChart',
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
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.createBarChart();
  },
  methods: {
    createBarChart() {
      const ctx = this.$refs.barChart;
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
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
