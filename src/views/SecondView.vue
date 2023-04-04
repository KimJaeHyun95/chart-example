<template>
  <div>
    <h1>두 번째 페이지 입니다.</h1>
    <wordcloud></wordcloud>
  </div>
</template>

<script>
import Wordcloud from "@/wordcloud/Wordcloud";

export default {
  name: 'SecondView',
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    Wordcloud
  },
  methods: {
  },
};
</script>

<style>
</style>
