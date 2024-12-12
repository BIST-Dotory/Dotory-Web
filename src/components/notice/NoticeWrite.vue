<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">공지사항 - 글쓰기</h2>
    </div>
    <div class="content">
      <div class="editor-container">
        <!-- 제목 입력 -->
        <input type="text" class="editor-title" placeholder="제목을 입력하세요" />

        <!-- 파일, 사진, 동영상 버튼 -->
        <div class="editor-toolbar">
          <button class="toolbar-button">
            <i class="bi bi-file-earmark-plus"></i> 파일
          </button>
          <button class="toolbar-button">
            <i class="bi bi-image"></i> 사진
          </button>
          <button class="toolbar-button">
            <i class="bi bi-play-circle"></i> 동영상
          </button>
        </div>

        <!-- 포맷 옵션 -->
        <div class="editor-formatting">
          <select class="font-size-select">
            <option value="36">36</option>
            <option value="28">28</option>
            <option value="24">24</option>
            <option value="20">20</option>
            <option value="16" selected>16</option>
            <option value="12">12</option>
          </select>
          &nbsp;
          <button class="format-button">
            <i class="bi bi-type-bold"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-type-italic"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-type-underline"></i>
          </button>
          &nbsp;
          <button class="format-button">
            <i class="bi bi-text-left"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-text-center"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-text-right"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-justify"></i>
          </button>
        </div>

        <!-- 내용 입력 -->
        <textarea class="editor-content" placeholder="내용을 입력하세요"></textarea>

        <!-- 등록 및 취소 버튼 -->
        <div class="editor-buttons">
          <button class="btn-submit">등록</button>
          <button class="btn-cancel" @click="showDialog = true">취소</button>
        </div>
        <!-- 다이얼로그 -->
        <div class="dialog-overlay" v-if="showDialog">
          <div class="dialog-box">
            <h3 class="dialog-title">게시글 작성을 취소하겠습니까?</h3>
            <p class="dialog-message">변경한 내용이 저장되지 않을 수 있습니다.</p>
            <div class="dialog-buttons">
              <button class="dialog-btn" @click="goBack">나가기</button>
              <button class="dialog-btn-cancel" @click="showDialog = false">취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
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

.editor-container {
  margin: 0 1rem 0 1rem;
}

.editor-title {
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #9A8A80;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}

.editor-toolbar {
  width: 100%;
  height: 50px;
  padding: 5px;
  border: 1px solid #9A8A80;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  gap: 10px;
  margin-bottom: 0.5rem;
}

.toolbar-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: 1px solid #9A8A80;
  color: #4F3322;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.editor-formatting {
  width: 100%;
  height: 50px;
  padding: 5px;
  border: 1px solid #9A8A80;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.font-size-select {
  padding: 5px;
  height: 40px;
  font-size: 14px;
  border: 1px solid #9A8A80;
  border-radius: 4px;
}

.format-button {
  height: 40px;
  background-color: #fff;
  border: 1px solid #9A8A80;
  color: #4f3322;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.bi-type-bold,
.bi-type-italic,
.bi-type-underline {
  font-size: 20px;
}

.editor-content {
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #9A8A80;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.editor-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-submit,
.btn-cancel {
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit {
  background-color: #BA7851;
}

.btn-submit:hover {
  background-color: #9B4B1C;
}

.btn-cancel {
  background-color: #9A8A80;
}

.btn-cancel:hover {
  background-color: #5A4A41;
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