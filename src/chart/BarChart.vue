<template>
  <div>
    <div className="chart-container">
      <canvas ref="barChart" style="max-width: 800px; max-height: 350px"></canvas>
    </div>
  </div>
</template>

<script>
import {Chart, BarController, LinearScale, CategoryScale, BarElement} from 'chart.js';

Chart.register(BarController, LinearScale, CategoryScale, BarElement);

export default {
  name: 'BarChart',
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
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'Example Data',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
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

<style>
.chart-container {
  position: relative;
  max-width: 800px;
  max-height: 350px;
}
</style>
