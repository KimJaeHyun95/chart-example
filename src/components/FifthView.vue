<template>
  <div>
    <h1>다섯 번째 페이지 입니다.</h1>
    <a href="javascript: void(0)" @click="test()">테스트</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
  },
  methods: {
    test() {
      // 서버에서 전달한 시간 값
      const serverTime = new Date('2023-04-11 12:00:00');

      console.log('[serverTime]', serverTime)

      // 클라이언트의 타임존 정보
      const timezoneOffset = new Date().getTimezoneOffset();

      // 클라이언트의 로컬 시간 계산
      const clientLocalTime = new Date(serverTime.getTime() - ((timezoneOffset + 540) * 60 * 1000));

      // 사용자에게 보여줄 시간 값
      const formattedTime = clientLocalTime.toLocaleString();

      console.log('[formattedTime]', formattedTime); // 예시 출력: 2023-04-11 21:00:00 (KST 기준)

    }
  },
};
</script>

<style scoped>
</style>
