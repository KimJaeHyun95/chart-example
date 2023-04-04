/**
* WaffleChart.vue
*
* 이 컴포넌트는 d3.js를 사용하여 와플 차트를 생성합니다.
* 와플 차트는 여러 카테고리 간의 상대적인 값을 시각화하는 데 사용
* 와플의 총 갯수(100)를 data의 value의 총합으로 나눈 나머지가 0이 아닐 경우 WaffleChart 특성상 표기가 적합하지 않음.
*
*/
<template>
  <div ref="waffleChart"></div>
</template>
<script>
// d3 라이브러리를 import
import * as d3 from 'd3';

export default {
  name: 'WaffleChart',
  data() {
    // Waffle 차트에 사용될 데이터
    return {
      data: [
        { category: 'A', value: 9 },
        { category: 'B', value: 5 },
        { category: 'C', value: 13 },
        { category: 'D', value: 3 },
        { category: 'E', value: 8 },
        { category: 'F', value: 12 },
      ],
    };
  },
  mounted() {
    this.createWaffleChart();
  },
  methods: {
    createWaffleChart() {
      // 그래프의 여백과 크기
      const margin = { top: 10, right: 10, bottom: 10, left: 10 };
      const width = 400 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      // 색상 스케일
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      // svg 요소 생성
      const svg = d3
          .select(this.$refs.waffleChart)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // 행과 열의 개수
      const rows = 10;
      const columns = 10;

      // 총 합산값과 스케일 팩터 계산
      const totalValue = this.data.reduce((sum, d) => sum + d.value, 0);
      const scaleFactor = 100 / totalValue;
      let squareIndex = 0;

      // 데이터 개수만큼 반복하며 사각형 요소 생성
      this.data.forEach((d, i) => {
        // 값의 비율에 따라 사각형 크기 조정
        const adjustedValue = Math.round(d.value * scaleFactor);

        // 사각형 요소 생성
        svg
            .selectAll(`.category-${i}`)
            .data(d3.range(adjustedValue))
            .enter()
            .append('rect')
            .attr('class', `square category-${i}`)
            .attr('width', (width / columns) - 1)
            .attr('height', (height / rows) - 1)
            .attr('x', (d, j) => ((squareIndex + j) % columns) * (width / columns))
            .attr('y', (d, j) => Math.floor((squareIndex + j) / columns) * (height / rows))
            .attr('fill', colorScale(d.category))
            .attr('stroke', '#FFFFFF')
            .attr('stroke-width', 1);

        // 다음 인덱스 지정
        squareIndex += adjustedValue;
      });
    },
  },
};
</script>
