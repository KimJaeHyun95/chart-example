<template>
  <div id="video-container"></div>
</template>

<script>
// import jwplayer from 'jwplayer';

export default {
  name: 'VideoPlayer',
  mounted() {
    this.initPlayer();
  },
  beforeUnmount() {
    if (this.player) {
      this.player.remove();
      this.player = null;
    }
  },
  methods: {
    initPlayer() {
      // const container = this.$el;
      // this.player = jwplayer(container);

      // this.player.setup({
      //   file: 'https://example.com/path/to/your/video.mp4',
      //   image: 'https://example.com/path/to/your/poster.jpg',
      //   width: '100%',
      //   aspectratio: '16:9',
      // });
    },
  },
};
</script>
