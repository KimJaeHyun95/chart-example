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
            data: [5, 20, 16, 20, 30, 40],
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
    <line-chart :chartWidth="1000" :chartHeight="400" :displayLegend="false"
                :data="{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Example Data 1',
            data: [12, 13, 7, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
          },
          {
            label: 'Example Data 2',
            data: [12, 23, 35, 32, 38, 45],
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
            data: [43, 34, 23, 14, 28, 26],
            borderColor: 'rgba(55, 99, 232, 1)',
            tension: 0.1,
          }
        ],
      }">
    </line-chart>
    <bar-chart :chartWidth="400" :chartHeight="300"
      :data="data1">
    </bar-chart>
    <bar-chart :chartWidth="400" :chartHeight="300" :displayLegend="false"
               :data="{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'test'],
        datasets: [
          {
            label: 'Example Data 1',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Example Data 2',
            data: [5, 10, 8, 14, 9, 12, 34],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      }">
    </bar-chart>
    <pie-chart :size="1" :displayLegend="true"
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

    <a href="javascript: void(0)" @click="test()">TEST</a>
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
      data1: {
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
      }
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
    test() {
      console.log(1)
    }
  },
};
</script>

<style scoped>
</style>
