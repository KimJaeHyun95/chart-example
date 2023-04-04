<template>
  <div>
    <div className="chart-container">
      <canvas ref="lineChart" style="max-width: 800px; max-height: 350px"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement } from 'chart.js';

Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement);

export default {
  name: 'LineChart',
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
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'Example Data',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1,
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
