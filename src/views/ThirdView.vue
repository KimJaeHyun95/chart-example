<template>
  <div>
    <h1>세 번째 페이지 입니다.</h1>
    <open-street-map></open-street-map>
    <seoul-map></seoul-map>
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

<style>
</style>
