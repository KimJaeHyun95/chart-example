<template>
  <div ref="koreaMap" style=""></div>
</template>
<script>
import * as d3 from "d3";
import { geoMercator } from "d3-geo";
import { geoPath } from "d3-geo";
import { zoom } from "d3-zoom";

export default {
  name: "KoreaDetailMap2",
  props: {
    size: Number
  },
  data() {
    return {};
  },
  mounted() {
    this.drawKoreaMap();
  },
  methods: {
    async drawKoreaMap() {
      const size = this.size || 1;
      const width = 800 * size;
      const height = 600 * size;
      const scale = 5000 * size;

      const svg = d3
          .select(this.$refs.koreaMap)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

      const g = svg.append("g");

      const projection = geoMercator()
          .center([128, 36]) // 대한민국 중심 좌표
          .scale(scale)
          .translate([width / 2, height / 2]);

      const path = geoPath().projection(projection);

      // 확대, 축소, 드래그 기능 추가
      const zoomHandler = zoom()
          .scaleExtent([1, 8]) // 확대, 축소 범위 설정
          .on("zoom", (event) => {
            g.attr("transform", event.transform);
          })
          .filter(event => {
            // 더블 클릭 이벤트를 필터링하여 확대 기능을 비활성화합니다.
            if (event.type === "dblclick") {
              return false;
            }
            return true;
          });

      svg.call(zoomHandler);

      // 대한민국 행정구역 TopoJSON 데이터 불러오기
      // GeoJSON 데이터를 불러옵니다.
      d3.json("https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-municipalities-2018-geo.json").then((geojson) => {
        // GeoJSON 데이터를 svg 요소에 추가합니다.
        g.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", 'rgb(206, 212, 218)')
            .style("stroke", "white")
            .style("stroke-width", "0.5px")
            .on("click", function() {
              const color = d3.select(this).style("fill");
              if (color === "rgb(206, 212, 218)") {
                d3.select(this).style("fill", "rgb(255, 0, 0)");
              } else if (color === "rgb(255, 0, 0)") {
                d3.select(this).style("fill", "rgb(0, 0, 255)");
              } else {
                d3.select(this).style("fill", "rgb(206, 212, 218)");
              }
            });
      });

      // 테두리를 그리기 위한 rect 요소 추가
      svg.append("rect")
          .attr("width", width)
          .attr("height", height)
          .style("fill", "none")
          .style("stroke", "black")
          .style("stroke-width", "1px");
    },
  },
};
</script>
