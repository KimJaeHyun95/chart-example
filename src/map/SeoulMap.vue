<template>
  <div ref="seoulMap"></div>
</template>

<script>
import * as d3 from "d3";
import { geoMercator } from "d3-geo";
import { geoPath } from "d3-geo";

export default {
  name: "SeoulMap",
  props: {
    size: Number
  },
  mounted() {
    this.drawSeoulMap();
  },
  methods: {
    async drawSeoulMap() {
      const size = this.size || 1;
      const width = 400 * size;
      const height = 300 * size;
      const scale = 50000 * size;

      const svg = d3
          .select(this.$refs.seoulMap)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

      const projection = geoMercator()
          .center([126.9895, 37.5651]) // 서울시 중심 좌표
          .scale(scale)
          .translate([width / 2, height / 2]);

      const path = geoPath().projection(projection);

      // 서울시 행정구역 TopoJSON 데이터 불러오기
      // GeoJSON 데이터를 불러옵니다.
      d3.json("https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo.json").then((geojson) => {
        // GeoJSON 데이터를 svg 요소에 추가합니다.
        svg.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", "#ced4da")
            .style("stroke", "#fff")
            .style("stroke-width", "0.5px")
            .on("click", function() {
              const color = d3.select(this).style("fill");
              if (color === "rgb(206, 212, 218)") {
                d3.select(this).style("fill", "rgb(255, 0, 0)");
              } else if (color === "rgb(255, 0, 0)") {
                d3.select(this).style("fill", "rgb(0, 0, 255)");
              } else if (color === "rgb(0, 0, 255)") {
                d3.select(this).style("fill", "rgb(206, 212, 218)");
              }
            });
      });
    },
  },
};
</script>
