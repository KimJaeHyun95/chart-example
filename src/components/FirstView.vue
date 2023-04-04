<template>
  <div>
    <h1>첫 번째 페이지 입니다.</h1>
    <line-chart></line-chart>
    <bar-chart></bar-chart>
    <pie-chart></pie-chart>
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

<style>
</style>
