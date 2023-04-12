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
    size: {
      type: Number,
      default: 1
    },
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
    return {
      wordCloudInstance: null,
      colorPalette: [
        '#0C4DA1', // KBS 로고 파란색
        '#FFFFFF', // 흰색
        '#FF0000', // 대한민국 국기 빨간색
        '#0000FF', // 대한민국 국기 파란색
        '#E21A36', // KBS 로고 빨간색
        '#0050B0', // 파랑
        '#FFC000', // 노란색
        '#5B9BD5', // 연한 파란색
        '#C0C0C0', // 회색
        '#FF9C00', // 주황색
      ]
    };
  },
  mounted() {
    this.createWordCloud();
  },
  methods: {

    createWordCloud() {
      const canvas = this.$refs.wordCloudCanvas;
      const wordList = this.wordList;

      let totalWeight = 0
      wordList.forEach((item) => {
        totalWeight += item[1]
      })

      wordList.forEach((item) => {
        item[1] *= 100/totalWeight
      })

      console.log(wordList)

      // 워드 클라우드 인스턴스 생성
      const wordCloudInstance = WordCloud(canvas, {
        list: wordList, // 워드 클라우드에 표시할 단어와 가중치를 포함하는 배열
        gridSize: 0, // 단어들 사이의 그리드 크기 (간격) 조절
        weightFactor: this.size, // 단어의 크기에 곱해지는 가중치 계수 조절
        fontFamily: 'Arial, sans-serif', // 워드 클라우드에서 사용할 글꼴 설정
        color: () => this.getRandomColor(), // 단어 색상을 결정하는 함수
        backgroundColor: '#FFF', // 워드 클라우드의 배경색 설정
        rotateRatio: 0.5, // 단어 회전 비율 설정 (0 ~ 1 사이의 값)
        rotationSteps: 2, // 회전 단계 수 (회전 각도의 개수)
        minSize: 0,
        drawOutOfBound: false, // 영역 밖에도 단어 그리기 허용 여부 설정
        shuffle: true, // 단어 배열을 섞을지 여부 설정
        click: function(item) { // 클릭 이벤트 처리 함수
          console.log(item);
        }
      });

      // wordCloudInstance를 data 객체에 저장
      this.wordCloudInstance = wordCloudInstance;
    },

    getRandomColor() {
      const paletteIndex = Math.floor(Math.random() * this.colorPalette.length);
      return this.colorPalette[paletteIndex];
    },
  }
};
</script>
<style scoped>
</style>
