<template>
  <div>
    <h1>두 번째 페이지 입니다.</h1>
    <word-Cloud :size="1"
    :wordList="[
        ['Hello', 50],
        ['World', 30],
        ['Example', 20],
        ['Data', 15],
        ['Vue.js', 10],
        ['WordCloud', 5]
      ]"
    ></word-Cloud>
    <waffle-chart :size="1" :rows="10" :columns="10"
      :data="[
        {category: 'A', value: 9},
        {category: 'B', value: 5},
        {category: 'C', value: 13},
        {category: 'D', value: 3},
        {category: 'E', value: 7},
        {category: 'F', value: 13}
      ]"></waffle-chart>
    <waffle-chart-horizontality :size="1" :rows="10" :columns="10"
      :data="[
        {category: 'A', value: 9},
        {category: 'B', value: 5},
        {category: 'C', value: 13},
        {category: 'D', value: 3},
        {category: 'E', value: 7},
        {category: 'F', value: 13}
      ]"></waffle-chart-horizontality>
    <network-chart :size="1" circleSize="1" circleDistance="1"
      :nodes="[
        { id: '코로나', depth: 0 },
        { id: '의료', depth: 1 },
        { id: '경제', depth: 1 },
        { id: '정부', depth: 1 },
        { id: '병원', depth: 2 },
        { id: '마스크', depth: 2 },
        { id: '백신', depth: 2 },
        { id: '자영업자', depth: 2 },
        { id: '금리', depth: 2 },
        { id: '보건복지본부', depth: 2 },
        { id: '정책', depth: 2 },
      ]"
      :links=" [
        { source: '코로나', target: '의료' },
        { source: '코로나', target: '경제' },
        { source: '코로나', target: '정부' },
        { source: '의료', target: '병원' },
        { source: '의료', target: '마스크' },
        { source: '의료', target: '백신' },
        { source: '경제', target: '자영업자' },
        { source: '경제', target: '금리' },
        { source: '정부', target: '보건복지본부' },
        { source: '정부', target: '정책' },
      ]"
    ></network-chart>
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

<style scoped>
</style>
