<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">공지사항</h2>
    </div>
    <div class="content">
      <table class="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>자유 게시판</td>
            <td>관리자</td>
            <td>2024.01.01</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>공지사항 게시판</td>
            <td>관리자</td>
            <td>2024.01.01</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination-container">
        <paginate :page-count="totalPages" :click-handler="changePage" :prev-text="'Previous'" :next-text="'Next'"
          :container-class="'pagination'" :page-class="'page-item'">
        </paginate>

        <div class="items-list">
          <!-- 현재 페이지의 아이템 표시 -->
          <div v-for="item in currentPageItems" :key="item.id">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="search-bar">
        <select class="search-select">
          <option>전체</option>
        </select>
        <input type="text" placeholder="검색어를 입력하세요">
        <button class="search-btn">검색</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Paginate from 'vuejs-paginate-next'

// 예시 데이터
const items = ref([
  { id: 1, name: '아이템 1' },
  { id: 2, name: '아이템 2' },
  // ... 더 많은 아이템 추가
])

const currentPage = ref(1)
const itemsPerPage = 5

// 현재 페이지의 아이템들
const currentPageItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return items.value.slice(start, end)
})

// 전체 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(items.value.length / itemsPerPage)
})

// 페이지 변경 핸들러
const changePage = (pageNum) => {
  currentPage.value = pageNum
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.container {
  width: 100%;
  font-family: 'NanumGothic';
  color: #4F3322;
}

.board-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

.board-table th {
  padding-bottom: 10px;
  border-bottom: 2px solid #4F3322;
  text-align: center;
  vertical-align: middle;  /* 수직 정렬 중앙 */
}

.board-table th:first-child {  /* 번호 열 */
  width: 10%;
}

.board-table th:nth-child(2) {  /* 제목 열 */
  width: 40%;
  text-align: left; 
}

.board-table tbody tr td:nth-child(2) {
  width: 40%;
  text-align: left;
}

.board-table th:nth-child(3) {  /* 작성자 열 */
  width: 15%;
}

.board-table th:nth-child(4) {  /* 작성일 열 */
  width: 15%;
}

.board-table th:last-child {  /* 조회수 열 */
  width: 15%;
}

.board-table td {
  padding: 10px 0px 10px 0px;
  border-bottom: 1.5px solid #9A8A80;
  text-align: center;
  vertical-align: middle;  /* 수직 정렬 중앙 */
}

.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.pagination .page-item {
  margin: 0 5px;
  cursor: pointer;
}

.pagination .page-item.active {
  font-weight: bold;
  color: blue;
}

.search-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.search-select {
  padding: 5px;
  border: 1px solid #ddd;
}

.search-bar input {
  padding: 5px 10px;
  border: 1px solid #ddd;
  width: 200px;
}

.search-btn {
  padding: 5px 15px;
  background-color: #666;
  color: white;
  border: none;
  cursor: pointer;
}
</style>