<template>
  <div>
    <h1>첫 번째 페이지 입니다.</h1>
    <line-chart :chartWidth="1000" :chartHeight="400"
      :data="{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Example Data 1',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
          {
            label: 'Example Data 2',
            data: [5, 10, 8, 14, 9, 12],
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1,
          },
          {
            label: 'Example Data 3',
            data: [5, 20, 8, 20, 30, 40],
            borderColor: 'rgba(55, 99, 132, 1)',
            tension: 0.1,
          },
          {
            label: 'Example Data 4',
            data: [43, 10, 5, 14, 28, 49],
            borderColor: 'rgba(55, 99, 232, 1)',
            tension: 0.1,
            hidden: true
          }
        ],
      }">
    </line-chart>
    <bar-chart :chartWidth="400" :chartHeight="300"
      :data="{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Example Data 1',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Example Data 2',
            data: [5, 10, 8, 14, 9, 12],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      }">
    </bar-chart>
    <pie-chart :size="1"
        :data="{
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
        }"
    ></pie-chart>
  </div>
</template>

<script>
import LineChart from "@/chart/LineChart";
import BarChart from "@/chart/BarChart";
import PieChart from "@/chart/PieChart";

export default {
  name: 'FirstView',
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    LineChart,
    BarChart,
    PieChart
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
