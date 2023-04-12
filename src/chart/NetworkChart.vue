<template>
  <div ref="networkChart" style="display: flex; justify-content: flex-start;"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "NetworkChart",
  props: {
    // Props:
    // - size: Number (optional) - 네트워크 차트의 크기를 조절하는 배율입니다. 기본값은 1입니다.
    // - circleSize: Number (optional) - 원의 크기를 조절하는 배율입니다. 기본값은 1입니다.
    // - circleDistance: Number (optional) - 노드 간 거리를 조절하는 배율입니다. 기본값은 1입니다.
    // - nodes: Array (required) - 네트워크 차트의 노드들을 나타내는 배열입니다. 각 노드는 { id: '식별자', depth: '깊이' } 형식이어야 합니다.
    // - links: Array (optional) - 네트워크 차트의 링크들을 나타내는 배열입니다. 각 링크는 { source: '출발 노드', target: '도착 노드' } 형식이어야 합니다.
    size: {
      type: Number,
      default: 1
    },
    circleSize: {
      type: Number,
      default: 1
    },
    circleDistance: {
      type: Number,
      default: 1
    },
    nodes: {
      type: Array,
      require: true
    },
    links: {
      type: Array,
      default: () => [],
    }
  },
  mounted() {
    this.createNetworkChart();
  },
  methods: {
    createNetworkChart() {
      // 데이터 정의
      const nodes = this.nodes;

      const links = this.links;

      // 그래프 크기 설정
      const width = 400 * this.size;
      const height = 300 * this.size;

      // 색상 배열을 만듭니다.
      const colors = [
        'rgba(255, 159, 64, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(231, 76, 60, 1)',
        'rgba(142, 68, 173, 1)',
        'rgba(26, 188, 156, 1)',
        'rgba(241, 196, 15, 1)',
        'rgba(230, 126, 34, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(52, 73, 94, 1)',
      ];

      // 색상 스케일
      const colorScale = d3.scaleOrdinal()
          .domain(this.nodes.map(d => d.category))
          .range(colors);

      // Force simulation 설정
      const simulation = d3
          .forceSimulation(nodes) // 노드들에 대한 시뮬레이션을 생성합니다.
          .force("link", d3.forceLink(links).id((d) => d.id).distance(35 * this.circleDistance)) // 링크에 대한 힘을 정의하고, 노드간 거리를 설정합니다.
          .force("charge", d3.forceManyBody().strength(- 500 * this.circleDistance)) // 노드간의 충돌을 처리하기 위한 힘을 정의합니다.
          .force("center", d3.forceCenter(width / 2, height / 2)) // 중심을 차트의 중간 지점으로 설정합니다.
          .force("x", d3.forceX(width / 2).strength(0.1)) // X축 방향의 힘을 설정하고 강도를 조절합니다.
          .force("y", d3.forceY(height / 2).strength(0.1)) // Y축 방향의 힘을 설정하고 강도를 조절합니다.
          .alpha(0.5); // 초기 알파 값을 낮춰 시뮬레이션 움직임이 빨리 멈추도록 합니다.

      // SVG 생성
      const svg = d3
          .select(this.$refs.networkChart) // 차트를 추가할 div를 선택합니다.
          .append("svg") // SVG 요소를 추가합니다.
          .attr("width", width) // SVG의 너비를 설정합니다.
          .attr("height", height); // SVG의 높이를 설정합니다.

      // 3초 뒤 움직임을 매우 약하게
      setTimeout(() => {
        simulation.alpha(0.1); // 1초 후 알파 값을 0으로 설정하여 움직임을 멈춥니다.
      }, 3000);

      // 링크 생성
      const link = svg
          .selectAll("line") // 모든 선(line) 요소를 선택합니다.
          .data(links) // 링크 데이터를 바인딩합니다.
          .enter() // 데이터를 기반으로 요소를 생성하도록 설정합니다.
          .append("line") // 선 요소를 추가합니다.
          .attr("stroke", "#999") // 선의 색상을 설정합니다.
          .attr("stroke-opacity", 0.7) // 선의 투명도를 설정합니다.
          .attr("stroke-width", 4 * this.circleSize); // 선의 두께를 설정합니다.

      // 노드 생성
      const node = svg
          .selectAll("circle") // 모든 원(circle) 요소를 선택합니다.
          .data(nodes) // 노드 데이터를 바인딩합니다.
          .enter() // 데이터를 기반으로 요소를 생성하도록 설정합니다.
          .append("circle") // 원 요소를 추가합니다.
          .attr("r", (d) => (d.depth === 0 ? 30 : 20 - d.depth * 5) * this.circleSize) // 원의 반지름을 노드의 depth에 따라 설정합니다.
          .attr("fill", (d) => colorScale(d.depth)) // 원의 색상을 노드의 depth에 따라 설정합니다.
          .style('cursor', 'pointer')
          .on('click', (event, d) => {
            console.log(d)
          });

      // 노드 레이블 생성
      const label = svg
          .selectAll("text") // 모든 텍스트(text) 요소를 선택합니다.
          .data(nodes) // 노드 데이터를 바인딩합니다.
          .enter() // 데이터를 기반으로 요소를 생성하도록 설정합니다.
          .append("text") // 텍스트 요소를 추가합니다.
          .text((d) => d.id) // 텍스트 내용을 노드의 id로 설정합니다.
          .attr("font-size", 10 * this.circleSize +"px") // 텍스트의 글꼴 크기를 설정합니다.
          .attr("text-anchor", "middle") // 텍스트의 정렬 방향을 중앙으로 설정합니다.
          .attr("dy",10 * this.circleSize / 2) // 텍스트의 y축 상의 위치를 조절합니다.
          .style('cursor', 'pointer')
          .on('click', (event, d) => {
            console.log(d)
          });

      // 시뮬레이션 tick 이벤트 리스너
      simulation.on("tick", () => {
        link
            .attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y);

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

        label
            .attr("x", (d) => d.x)
            .attr("y", (d) => d.y);
      });
    },

    // drag(simulation) {
    //   function dragstarted(event, d) {
    //     if (!event.active) simulation.alphaTarget(0.3).restart();
    //     d.fx = d.x;
    //     d.fy = d.y;
    //   }
    //
    //   function dragged(event, d) {
    //     d.fx = event.x;
    //     d.fy = event.y;
    //   }
    //
    //   function dragended(event, d) {
    //     if (!event.active) simulation.alphaTarget(0);
    //     d.fx = null;
    //     d.fy = null;
    //   }
    //
    //   return d3
    //       .drag()
    //       .on("start", dragstarted)
    //       .on("drag", dragged)
    //       .on("end", dragended);
    // },
  },
};
</script>
