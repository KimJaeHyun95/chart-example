<template>
  <div>
    <div class="chart-container">
      <canvas ref="pieChart" style="max-width: 800px; max-height: 350px"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.createPieChart();
  },
  methods: {
    createPieChart() {
      const ctx = this.$refs.pieChart;
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [
            {
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
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
