<template>
  <div id="map" ref="map" :style="{ height: mapSize.height + 'px', width: mapSize.width + 'px' }"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "OpenStreetMap",
  // Props:
  // - size: Number (optional) - 지도와 마커의 크기를 조절하는 배율입니다. 기본값은 1입니다.
  // - zoom: Number (optional) - 지도의 초기 확대 수준입니다. 기본값은 17입니다.
  // - center: Array (required) - 지도의 초기 중심 좌표입니다. [위도, 경도] 형식의 배열이어야 합니다.
  // - markers: Array (optional) - 지도에 추가할 마커들의 배열입니다. 각 마커는 { coordinates: [위도, 경도], name: '이름' } 형식이어야 합니다.
  props: {
    size: Number,
    zoom: Number,
    center: {
      type: Array,
      required: true,
    },
    markers: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    mapSize() {
      const size = this.size || 1;
      return {
        height: 300 * size,
        width: 400 * size
      };
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // 지도 초기화 및 설정
      const map = L.map(this.$refs.map).setView(this.center, this.zoom || 17);

      const size = this.size || 1;

      const iconSize = new L.Point(12.5 * size, 20.5 * size);
      const iconAnchor = new L.Point(6.25 * size, 20.5 * size);
      const popupAnchor = new L.Point(0, -33 * size);


      // 마커 이미지 경로 설정 및 크기 조절
      const customIcon = new L.Icon({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
        iconSize: iconSize,
        iconAnchor: iconAnchor,
        popupAnchor: popupAnchor
      });

      // OpenStreetMap 타일 레이어 추가
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      this.markers.forEach(marker => {
        L.marker(marker.coordinates, { icon: customIcon })
            .addTo(map)
            .bindPopup(marker.name);
      });
    },
  },
};
</script>
