<template>
  <div class="container">
      <div class="dashboard-container">
        <!-- 왼쪽 컬럼 -->
        <div class="left-column">
          <!-- 공지사항 섹션 -->
          <div class="section notice-section">
            <div class="section-header">
              <h2 class="title">공지사항</h2>
              <button class="more-btn" @click="$router.push('/notice')">더 보기</button>
            </div>
            <div class="content-list">
              <div class="list-item">
                <span class="item-title">게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목게시글 제목</span>
                <span class="item-info">
                  <span class="author">관리자</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">관리자</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">관리자</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">관리자</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">관리자</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
            </div>
          </div>

          <!-- 건의사항 섹션 -->
          <div class="section suggest-section">
            <div class="section-header">
              <h2 class="title">건의사항</h2>
              <button class="more-btn" @click="$router.push('/suggest')">더 보기</button>
            </div>
            <div class="content-list">
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">가나다</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">게시글 제목</span>
                <span class="item-info">
                  <span class="author">가나다라</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 오른쪽 컬럼 -->
        <div class="right-column">
          <!-- 외출/외박 섹션 -->
          <div class="section outing-section">
            <div class="section-header">
              <h2 class="title">외출/외박</h2>
              <button class="more-btn" @click="$router.push('/outing')">더 보기</button>
            </div>
            <div class="content-list">
              <div class="list-item">
                <span class="item-title">[외박] 1001</span>
                <span class="item-info">
                  <span class="author">가나다</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
              <div class="list-item">
                <span class="item-title">[외박] 1001</span>
                <span class="item-info">
                  <span class="author">가나다라</span>
                  <span class="date">2024.11.19</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.container {
  width: 100%;
  font-family: "NanumGothic";
}

.dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  height: calc(100vh - 100px);
}

.left-column {
  display: flex;
  flex-direction: column;
}

.section {
  background-color: #f5f5f5;
  height: 100%;
}

.left-column .section {
  height: calc(50%);
}

.right-column .section {
  height: 100%;
}

.more-btn {
  color: #9A8A80;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-family: "NanumGothic"
}

.more-btn:hover {
  color: #4F3322;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid #9A8A80;
}

.item-title {
  font-size: 16px;
  color: #4F3322;
  display: block;
  max-width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-info {
  display: flex;
  align-items: center;
  color: #4F3322;
  font-size: 16px;
}

.author {
  min-width: 80px;
}

.date {
  color: #9A8A80;
}
</style>