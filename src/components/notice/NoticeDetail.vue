<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">공지사항</h2>
    </div>
    <div class="content">
      <div class="notice-detail">
        <div class="detail-header">
          <h3 class="detail-title">{{ notice.title }}</h3>
          <div class="detail-profile">
            <div class="detail-profile-image">
              <i class="bi bi-person-circle"></i>
            </div>
          </div>
            <span class="detail-profile-name">{{ notice.author }}</span>
            <div class="detail-info">
              <span class="detail-info-date">{{ notice.date }}</span>
              <span class="detail-info-views">조회수 {{ notice.views }}</span>
            </div>
        </div>
        <div class="detail-content">
          {{ notice.content }}
        </div>
        <div class="button-container">
          <button class="btn-list" @click="goBack">
            <i class="bi bi-list"></i>
            목록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NoticeDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      notice: {
        id: this.id,
        title: '첫번째 공지사항',
        author: '관리자',
        date: '2024.11.19',
        views: 0,
        content: '공지사항 내용입니다.'
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Notice' })
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.detail-header {
  margin: 1rem;
}

.detail-title {
  font-size: 24px;
  font-family: 'NanumGothicBold';
  margin-bottom: 1rem;
}

.detail-profile {
  color: #9A8A80;
  display: flex;
}

.detail-profile-name {
  font-size: 18px;
  color: #4F3322;
  font-family: 'NanumGothicBold';
}

.detail-info {

  margin-left: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
}

.btn-list {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #BA7851;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  font-family: 'NanumGothic';
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-list:hover {
  background-color: #9B4B1C;
}

.bi-list {
  font-size: 20px;
}

.bi-person-circle {
  font-size: 50px;
}
</style>