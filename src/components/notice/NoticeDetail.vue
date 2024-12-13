<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">공지사항</h2>
    </div>
    <div class="content">
      <div class="detail">
        <div class="detail-header">
          <h3 class="detail-title">{{ notice.title }}</h3>
          <div class="profile-container">
            <div class="profile-image">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="profile-text">
              <span class="profile-name">{{ notice.author }}</span>
              <div class="profile-meta">
                <span class="profile-date">{{ notice.date }}&nbsp;</span>
                <span class="profile-views">조회수 {{ notice.views }}</span>
              </div>
            </div>
          </div>
          <div class="detail-content">
            {{ notice.content }}
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
            <div class="button-container-right">
              <button class="btn-rewrite" @click="editNotice">
                <i class="bi bi-pencil"></i>
                수정
              </button>
              &nbsp;&nbsp;
              <button class="btn-delete" @click="showDialog = true">
                <i class="bi bi-trash"></i>
                삭제
              </button>
            </div>
            <div class="dialog-overlay" v-if="showDialog">
              <div class="dialog-box">
                <h3 class="dialog-title">게시글을 삭제하겠습니까??</h3>
                <p class="dialog-message">변경한 내용이 저장되지 않을 수 있습니다.</p>
                <div class="dialog-buttons">
                  <button class="dialog-btn" @click="goBack">삭제</button>
                  <button class="dialog-btn-cancel" @click="showDialog = false">취소</button>
                </div>
              </div>
            </div>
          </div>
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
      required: true,
    },
  },
  data() {
    return {
      showDialog: false,
      notice: {
        id: this.id,
        title: '첫번째 공지사항',
        author: '관리자',
        date: '2024.11.19',
        views: 1,
        content: '공지사항 내용입니다.'
      },
      comment: {
        required: true,
        author: '사용자',
        text: '댓글 내용입니다.',
        date: '2024.11.19 20:00', 
      },
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Notice' })
    },
    editNotice() {
    this.$router.push({ 
      name: 'NoticeWrite',
      state: { mode: 'edit' }
    })
    },
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
  margin-top: 1rem;
  margin-bottom: 5rem;
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
}

.btn-list, .btn-rewrite, .btn-delete {
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

.btn-list:hover, .btn-rewrite:hover, .btn-delete:hover {
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

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-box {
  width: 30rem;
  padding: 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
}

.dialog-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #4F3322;
}

.dialog-message {
  font-size: 16px;
  color: #9A8A80;
  margin-bottom: 20px;
}

.dialog-buttons {
  display: flex;
  justify-content: right;
  gap: 10px;
}

.dialog-btn {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #BA7851;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dialog-btn-cancel {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #9A8A80;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.dialog-btn:hover {
  background-color: #9B4B1C;
}

.dialog-btn-cancel:hover {
  background-color: #5A4A41;
}
</style>
