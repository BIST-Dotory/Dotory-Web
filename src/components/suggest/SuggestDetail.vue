<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">건의사항</h2>
    </div>
    <div class="content">
      <div class="detail">
        <div class="detail-header">
          <h3 class="detail-title">{{ suggest.title }}</h3>
          <div class="profile-container">
            <div class="profile-image">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="profile-text">
              <span class="profile-name">{{ suggest.author }}</span>
              <div class="profile-meta">
                <span class="profile-date">{{ suggest.date }}&nbsp;</span>
                <span class="profile-views">조회수 {{ suggest.views }}</span>
              </div>
            </div>
          </div>
          <div class="detail-content">
            {{ suggest.content }}
          </div>
          <div class="image-container">
            <i class="bi bi-image"></i>
          </div>
          <div class="detail-comment">
            <textarea class="comment-input" placeholder="댓글을 입력하세요"></textarea>
            <button class="button-comment">등록</button>
          </div>
          <div class="comment-item">
            <div class="comment-avatar">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="comment-content">
              <div class="comment-header">
                <span class="comment-author">{{ comment.author }}</span>
              </div>
              <div class="comment-main">
                <span class="comment-text">{{ comment.text }}</span>
              </div>
              <div class="comment-footer">
                <span class="comment-date">{{ comment.date }}</span>
              </div>
            </div>
          </div>
          <div class="button-container">
            <div class="button-container-left">
              <button class="btn-list" @click="goBack">
                <i class="bi bi-list"></i>
                목록
              </button>
            </div>
            <div class="button-container-right" disabled="disabled">
              <button class="btn-rewrite" @click="editSuggest(suggest)">
                <i class="bi bi-pencil"></i>
                수정
              </button>
              &nbsp;&nbsp;
              <button class="btn-delete" @click="deleteSuggest(suggest.id)">
                <i class="bi bi-trash"></i>
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestDetail',
  props: {
    id: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      suggest: {
        id: this.id,
        title: '첫번째 건의사항',
        author: '사용자',
        date: '2024.11.27 18:00',
        views: 10,
        content: '건의사항 내용입니다.'
      },
      comment: {
        required: true,
        author: '관리자',
        text: '댓글 내용입니다.',
        date: '2024.11.27 18:10', 
      },
    }
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'Suggest' })
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

.profile-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-text {
  margin-top: -10px;
}

/* 이름 (상단) */
.profile-name {
  font-weight: bold;
  color: #4F3322;
}

/* 작성일, 조회수 (하단) */
.profile-meta {
  color: #9A8A80;
}

.detail-content {
  margin: 1rem 0 1rem 0;
  white-space: pre-line;
}

.detail-comment {
  display: flex;
  flex-direction: column;
  border: 1px solid #9A8A80;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  max-width: 100%;
  margin: 1rem auto;
}

.comment-input {
  width: 100%;
  border: none;
  outline: none;
  color: #9B4B1C;
  padding: 5px;
  height: 5rem;
  resize: none;
}

.button-comment {
  align-self: flex-end;
  padding: 5px 15px;
  background-color: #BA7851;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-comment:hover {
  background-color: #9B4B1C;
}

.comment-input::placeholder {
  color: #9A8A80;
}

.comment-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.comment-content {
  display: flex;
  flex-direction: column;
  color: #4F3322;
  margin-left: 1rem;
}

.comment-header {
  font-weight: bold;
  color: #4F3322;
  margin: 5px 0 5px 0;
}

.comment-footer {
  color: #9A8A80;
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.button-container-left {
  display: flex;
  justify-content: left;
}

.button-container-right {
  display: flex;
  justify-content: right;
  background-color: #fff;
}

.btn-list {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #BA7851;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-rewrite, .btn-delete {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  color: #9A8A80;
  border: 1px solid #9A8A80;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-list:hover {
  background-color: #9B4B1C;
}

.bi-list, .bi-pencil, .bi-trash {
  font-size: 20px;
  margin-top: 5px;
}

.bi-person-circle {
  font-size: 50px;
  color: #9A8A80;
}

.image-container {
  width: 40rem;
  height: 20rem;
  margin-bottom: 5rem;
  background-color: #9A8A80;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bi-image {
  font-size: 50px;
}
</style>
