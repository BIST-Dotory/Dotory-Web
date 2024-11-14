<template>
  <div class="notice-detail">
    <h2>{{ notice.title }}</h2>
    <div class="content">
      {{ notice.content }}
    </div>
    <button @click="goBack">목록으로</button>
  </div>
</template>

<script>
export default {
  name: 'NoticeDetail',
  props: {
    id: { // 라우트 파라미터를 prop으로 받음
      type: String,
      required: true
    }
  },
  data() {
    return {
      notice: {
        id: this.id,
        title: '',
        content: ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Notice' })
    }
  },
  // created() 훅에서 id를 이용해 게시글 데이터를 불러올 수 있습니다
}
</script>