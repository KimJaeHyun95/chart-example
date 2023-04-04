<template>

  <div ref="koreaMap"></div>
</template>
<script>
import * as d3 from "d3";
import { geoMercator } from "d3-geo";
import { geoPath } from "d3-geo";

export default {
  name: "KoreaDetailMap",
  props: {
    size: Number
  },
  data() {
    return {
      seoulCodeList: [  "11010", "11020", "11030", "11040", "11050",  "11060", "11070", "11080", "11090", "11100",  "11110", "11120", "11130", "11140", "11150",  "11160", "11170", "11180", "11190", "11200",  "11210", "11220", "11230", "11240", "11250"]

    };
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

      const projection = geoMercator()
          .center([128, 36]) // 대한민국 중심 좌표
          .scale(scale)
          .translate([width / 2, height / 2]);

      const path = geoPath().projection(projection);

      // 대한민국 행정구역 TopoJSON 데이터 불러오기
      // GeoJSON 데이터를 불러옵니다.
      d3.json("https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-municipalities-2018-geo.json").then((geojson) => {
        // GeoJSON 데이터를 svg 요소에 추가합니다.
        svg.selectAll("path")
            .data(geojson.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", (geo => {
              if (this.seoulCodeList.includes(geo.properties.code)) {
                console.log(geo.properties.code)
                return 'rgb(255, 0, 0)';
              } else {
                return 'rgb(206, 212, 218)';
              }
            }) )
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
    },
  },
};
</script>
