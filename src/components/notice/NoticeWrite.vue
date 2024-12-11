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
          <button class="format-button">
            <i class="bi bi-type-bold"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-type-italic"></i>
          </button>
          <button class="format-button">
            <i class="bi bi-type-underline"></i>
          </button>
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
          <button class="btn-cancel">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.editor-container {
  margin: 0 1rem 0 1rem;
}

.editor-title {
  width: 100%;
  padding: 15px;
  border: 1px solid #9A8A80;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}

.editor-toolbar {
  width: 100%;
  padding: 10px;
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
  padding: 10px;
  font-size: 16px;
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
  font-size: 14px;
  border: 1px solid #9A8A80;
  border-radius: 4px;
}

.format-button {
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
  padding: 5px 15px;
  color: #fff;
  border: none;
  border-radius: 4px;
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
</style>