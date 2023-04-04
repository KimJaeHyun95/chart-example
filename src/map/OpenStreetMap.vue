<template>
  <div id="map" ref="map"></div>
</template>

<style>
#map {
  height: 300px;
  width: 400px;
}
</style>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "OpenStreetMap",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const seoulCityHall = [37.5663, 126.9779]; // 서울 시청의 좌표

      // 지도 초기화 및 설정
      const map = L.map(this.$refs.map).setView(seoulCityHall, 15);

      // 마커 이미지 경로 설정
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      });

      // OpenStreetMap 타일 레이어 추가
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // 서울 시청에 마커 추가
      L.marker(seoulCityHall).addTo(map).bindPopup("서울 시청");
    },
  },
};
</script>
