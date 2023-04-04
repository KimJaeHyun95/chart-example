<template>
  <div>
    <h1>세 번째 페이지 입니다.</h1>
    <open-street-map  :size="1" :zoom="17"
      :center="[37.5663, 126.9779]"
      :markers="[
        { coordinates: [37.5663, 126.9779], name: '서울 시청' },
        { coordinates: [37.5796, 126.9768], name: '광화문' },
      ]"
    ></open-street-map>

    <seoul-map :size="1"></seoul-map>

  </div>
</template>

<script>
import OpenStreetMap from "@/map/OpenStreetMap";
import SeoulMap from "@/map/SeoulMap";

export default {
  name: 'ThirdView',
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    OpenStreetMap,
    SeoulMap
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
