<template>
  <div>
    <h1>다섯 번째 페이지 입니다.</h1>
    <video-player></video-player>
  </div>
</template>

<script>
import VideoPlayer from "@/player/VideoPlayer";

export default {
  name: 'ThirdView',
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    VideoPlayer
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
