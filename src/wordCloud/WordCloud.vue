<template>
  <div class="wordcloud-container" style="display: flex; justify-content: flex-start;">
    <canvas ref="wordCloudCanvas" :width="canvasSize.width" :height="canvasSize.height"></canvas>
  </div>
</template>
<script>
import WordCloud from 'wordcloud';

export default {
  name: 'WordCloud',
  // Props:
  // - size: Number (optional) - 워드 클라우드의 크기를 조절하는 배율입니다. 기본값은 1입니다.
  // - wordList: Array (optional) - 워드 클라우드에 표시할 단어와 가중치를 포함하는 배열입니다. 각 단어는 ['단어', 가중치] 형식이어야 합니다.
  props: {
    size: Number,
    wordList: {
      type: Array,
      require: true
    },
  },
  computed: {
    canvasSize() {
      const size = this.size || 1;
      return {
        width: 400 * size,
        height: 300 * size
      };
    }
  },
  data() {
    return {wordCloudInstance: null};
  },
  mounted() {
    this.createWordCloud();
  },
  methods: {
    createWordCloud() {
      const canvas = this.$refs.wordCloudCanvas;
      const size = this.size || 1;
      WordCloud(canvas, {
        list: this.wordList,
        gridSize: 3 * size,
        weightFactor: 4 * size,
        fontFamily: 'Roboto, sans-serif',
        color: 'random-dark',
        backgroundColor: '#FFFFFF',
        rotateRatio: 0.5,
        rotationSteps: 2,
        shuffle: true
      });
    }
  }
};
</script>
<style scoped>
</style>
