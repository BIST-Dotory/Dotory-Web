<template>
  <div class="outing-detail">
    <h1>{{ outing.title }}</h1>
    <div class="content">
      {{ outing.content }}
    </div>
    <button @click="goBack">목록으로</button>
  </div>
</template>

<script>
export default {
  name: 'OutingDetail',
  props: {
    id: { // 라우트 파라미터를 prop으로 받음
      type: String,
      required: true
    }
  },
  data() {
    return {
      outing: {
        id: this.id,
        title: '',
        content: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Outing' })
    }
  },
  // created() 훅에서 id를 이용해 게시글 데이터를 불러올 수 있습니다
}
</script>

<style scoped>
@import "@/assets/css/style.css";
</style>