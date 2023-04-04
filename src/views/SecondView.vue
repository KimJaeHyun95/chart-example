<template>
  <div>
    <h1>두 번째 페이지 입니다.</h1>
    <word-Cloud></word-Cloud>
    <waffle-chart></waffle-chart>
    <waffle-chart-horizontality></waffle-chart-horizontality>
    <network-chart></network-chart>
  </div>
</template>

<script>
import WordCloud from "@/wordCloud/WordCloud";
import WaffleChart from "@/chart/WaffleChart";
import WaffleChartHorizontality from "@/chart/WaffleChartHorizontality";
import NetworkChart from "@/chart/NetworkChart";

export default {
  name: 'SecondView',
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    WordCloud,
    WaffleChart,
    WaffleChartHorizontality,
    NetworkChart
  },
  methods: {
  },
};
</script>

<style>
</style>
