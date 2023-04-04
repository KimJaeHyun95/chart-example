<template>
  <div>
    <div class="chart-container">
      <canvas ref="pieChart" style="max-width: 450px; max-height: 450px"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

export default {
  name: 'PieChart',
  props: {
    size: {
      type: Number,
      default: 1
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
    this.createPieChart();
  },
  methods: {
    createPieChart() {
      const ctx = this.$refs.pieChart;
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: this.data,
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  max-width: 500px;
  max-height: 500px;
}
</style>
