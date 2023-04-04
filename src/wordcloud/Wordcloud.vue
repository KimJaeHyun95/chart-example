<template>
  <div className="wordcloud-container">
    <canvas ref="wordCloudCanvas" style="max-width: 800px; max-height: 400px"></canvas>
  </div>
</template>

<script>
  import WordCloud from 'wordcloud';

  export default {
  name: 'WordCloud',
  data() {
  return {
  wordCloudInstance: null,
};
},
  mounted() {
  this.createWordCloud();
},
  methods: {
  createWordCloud() {
  const canvas = this.$refs.wordCloudCanvas;
  const wordList = [
    ['Hello', 50],
    ['World', 30],
    ['Example', 20],
    ['Data', 15],
    ['Vue.js', 10],
    ['WordCloud', 5],
  ];

  WordCloud(canvas, {
  list: wordList,
  gridSize: 5,
  weightFactor: 2,
  fontFamily: 'Roboto, sans-serif',
  color: 'random-dark',
  backgroundColor: '#FFFFFF',
  rotateRatio: 0.5,
  rotationSteps: 2,
  shuffle: true,
});
},
},
};
</script>

<style>
  .wordcloud-container {
  position: relative;
  max-width: 800px;
  max-height: 400px;
}
</style>
