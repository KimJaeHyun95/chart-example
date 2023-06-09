<template>
  <div ref="waffleChart" style="display: flex; justify-content: flex-start;"></div>
</template>
<script>
// d3 라이브러리를 import
import * as d3 from 'd3';
export default {
  name: 'WaffleChart',
  props: {
    size: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 10
    },
    columns: {
      type: Number,
      default: 10
    },
    data: Object
  },
  data() { // Waffle 차트에 사용될 데이터
    return {
    };
  },
  mounted() {
    this.createWaffleChart();
  },
  methods: {createWaffleChart() {
      const size = this.size;
      const rows = this.rows;
      const columns = this.columns;

      // 그래프의 여백과 크기
      const margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      };
      const width = 400 * size * columns / 10 - margin.left - margin.right;
      const height = 400 * size * rows / 10 - margin.top - margin.bottom;

      // 색상 배열을 만듭니다.
      const colors = [
        'rgba(255, 159, 64, 0.3)',
        'rgba(46, 204, 113, 0.3)',
        'rgba(52, 152, 219, 0.3)',
        'rgba(231, 76, 60, 0.3)',
        'rgba(142, 68, 173, 0.3)',
        'rgba(26, 188, 156, 0.3)',
        'rgba(241, 196, 15, 0.3)',
        'rgba(230, 126, 34, 0.3)',
        'rgba(155, 89, 182, 0.3)',
        'rgba(52, 73, 94, 0.3)',
      ];

      // 색상 스케일
      const colorScale = d3.scaleOrdinal()
          .domain(this.data.map(d => d.category))
          .range(colors);

      // svg 요소 생성
      const svg = d3
          .select(this.$refs.waffleChart)
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${
              margin.left
          }, ${
              margin.top
          })`);

      // 총 합산값과 스케일 팩터 계산
      const totalValue = this.data.reduce((sum, d) => sum + d.value, 0);
      const scaleFactor = 100 / totalValue;
      let squareIndex = 0;
      // 데이터 개수만큼 반복하며 사각형 요소 생성
      this.data.forEach((d, i) => { // 값의 비율에 따라 사각형 크기 조정
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
            .attr('stroke-width', 1)
            .style('cursor', 'pointer')
            .on('mouseover', function() { // 마우스 오버 이벤트 등록
              d3.select(this)
                  .attr('opacity', 0.7)
                  .append('title')
                  .text(d.category); // 항목 이름을 title 속성에 설정
            })
            .on('mouseout', function() { // 마우스 아웃 이벤트 등록
              d3.select(this)
                  .attr('opacity', 1)
                  .select('title')
                  .remove(); // title 요소 제거
            });

        // 다음 인덱스 지정
        squareIndex += adjustedValue;
      });

    }
  }
};
</script>
