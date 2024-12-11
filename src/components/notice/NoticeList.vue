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
          <tr v-for="(item, index) in paginatedItems" :key="item.id">
            <!-- 번호는 전체 데이터 기준으로 계산 -->
            <td>{{ getItemNumber(item) }}</td>
            <td @click="goToDetail(item.id)">{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.views }}</td>
          </tr>
          <tr v-if="filteredItems.length === 0">
            <td colspan="5">검색 결과가 없습니다.</td>
          </tr>
        </tbody>
      </table>

      <!-- 페이지네이션 -->
      <nav class="pagination-nav" aria-label="Page navigation">
        <ul class="pagination-list">
          <li :class="['page-item', { disabled: currentPage === 1 }]">
            <a href="#" class="page-link" @click.prevent="goToFirstPage" aria-label="First">
              <i class="bi bi-arrow-left-short"></i>
            </a>
          </li>
          <li v-for="page in pagesToShow" :key="page" :class="['page-item', { active: page === currentPage }]">
            <a href="#" class="page-link" @click.prevent="changePage(page)">
              {{ page }}
            </a>
          </li>
          <li :class="['page-item', { disabled: currentPage === totalPages }]">
            <a href="#" class="page-link" @click.prevent="goToLastPage" aria-label="Last">
              <i class="bi bi-arrow-right-short"></i>
            </a>
          </li>
        </ul>
      </nav>

      <!-- 검색 및 글쓰기 버튼 -->
      <div class="search-write-container">
        <div class="search-section">
          <div class="search-wrapper">
            <select class="search-select" v-model="searchOption">
              <option value="title">제목</option>
              <option value="author">작성자</option>
              <option value="all">전체</option>
            </select>
            <div class="search-input-group">
              <input type="text" class="search-input" placeholder="검색어를 입력해주세요." v-model="searchKeyword"
                @input="onSearch" />
              <button class="search-button" @click="onSearch">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="write-section">
          <button type="button" class="write-button" @click="goToWrite">
            <i class="bi bi-pencil-square"></i>
            글쓰기
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
      { id: 1, title: '첫번째 공지사항', author: '관리자', date: '2024.11.19', views: 0 },
        { id: 2, title: '두번째 공지사항', author: '관리자', date: '2024.11.20', views: 5 },
        { id: 3, title: '세번째 공지사항', author: '관리자', date: '2024.11.21', views: 10 },
        { id: 4, title: '네번째 공지사항', author: '관리자', date: '2024.11.22', views: 7 },
        { id: 5, title: '다섯번째 공지사항', author: '관리자', date: '2024.11.23', views: 2 },
        { id: 6, title: '여섯번째 공지사항', author: '관리자', date: '2024.11.24', views: 1 },
        { id: 7, title: '첫번째 공지사항', author: '관리자', date: '2024.11.19', views: 0 },
        { id: 8, title: '두번째 공지사항', author: '관리자', date: '2024.11.20', views: 5 },
        { id: 9, title: '세번째 공지사항', author: '관리자', date: '2024.11.21', views: 10 },
        { id: 10, title: '네번째 공지사항', author: '관리자', date: '2024.11.22', views: 7 },
        { id: 11, title: '다섯번째 공지사항', author: '관리자', date: '2024.11.23', views: 2 },
        { id: 12, title: '여섯번째 공지사항', author: '관리자', date: '2024.11.24', views: 1 },
        { id: 13, title: '첫번째 공지사항', author: '관리자', date: '2024.11.19', views: 0 },
        { id: 14, title: '두번째 공지사항', author: '관리자', date: '2024.11.20', views: 5 },
        { id: 15, title: '세번째 공지사항', author: '관리자', date: '2024.11.21', views: 10 },
        { id: 16, title: '네번째 공지사항', author: '관리자', date: '2024.11.22', views: 7 },
        { id: 17, title: '다섯번째 공지사항', author: '관리자', date: '2024.11.23', views: 2 },
        { id: 18, title: '여섯번째 공지사항', author: '관리자', date: '2024.11.24', views: 1 },
        { id: 19, title: '첫번째 공지사항', author: '관리자', date: '2024.11.19', views: 0 },
        { id: 20, title: '두번째 공지사항', author: '관리자', date: '2024.11.20', views: 5 },
        { id: 21, title: '세번째 공지사항', author: '관리자', date: '2024.11.21', views: 10 },
        { id: 22, title: '네번째 공지사항', author: '관리자', date: '2024.11.22', views: 7 },
        { id: 23, title: '다섯번째 공지사항', author: '관리자', date: '2024.11.23', views: 2 },
        { id: 24, title: '여섯번째 공지사항', author: '관리자', date: '2024.11.24', views: 1 },
      ],
      itemsPerPage: 3,
      currentPage: 1,
      maxVisiblePages: 5,
      searchKeyword: '',
      searchOption: 'all',
    };
  },
  computed: {
    filteredItems() {
      if (!this.searchKeyword) return this.sortedItems;

      const keyword = this.searchKeyword.toLowerCase();

      return this.sortedItems.filter((item) => {
        if (this.searchOption === 'title') {
          return item.title.toLowerCase().includes(keyword);
        } else if (this.searchOption === 'author') {
          return item.author.toLowerCase().includes(keyword);
        } else if (this.searchOption === 'all') {
          return (
            item.title.toLowerCase().includes(keyword) ||
            item.author.toLowerCase().includes(keyword)
          );
        }
        return false;
      });
    },
    totalItems() {
      return this.filteredItems.length;
    },
    sortedItems() {
      return [...this.items].sort((a, b) => b.id - a.id);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    // 페이지별 아이템 표시
    paginatedItems() {
      return this.filteredItems.slice(this.startIndex, this.startIndex + this.itemsPerPage);
    },
    pagesToShow() {
      const half = Math.floor(this.maxVisiblePages / 2);
      let start = Math.max(this.currentPage - half, 1);
      let end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);

      if (end - start + 1 < this.maxVisiblePages) {
        start = Math.max(end - this.maxVisiblePages + 1, 1);
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    goToFirstPage() {
      this.currentPage = 1;
    },
    goToLastPage() {
      this.currentPage = this.totalPages;
    },
    onSearch() {
      this.currentPage = 1; // 검색 시 첫 페이지로 이동
    },
    getItemNumber(item) {
      return item.id; // 각 항목의 원래 id를 직접 반환
    },
    goToDetail(id) {
      this.$router.push(`notice/${id}`);
    },
    goToWrite() {
      this.$router.push('notice/write');
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/style.css";

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

.pagination-nav {
  margin: 2rem 0;
}

.pagination-list {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 0.7rem;
}

.page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #4F3322;
  text-decoration: none;
  border-radius: 5px;
  border: none;
}

.page-item.active .page-link {
  background-color: #BA7851;
  border-color: #BA7851;
  color: white;
}

.page-item:first-child .page-link {
  border-radius: 5px 5px 5px 5px;
}

.page-item:last-child .page-link {
  border-radius: 5px 5px 5px 5px;
}

/* 검색 영역 */
.search-write-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.write-section {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.search-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.search-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-select {
  padding: 10px 10px;
  border: 2px solid #9A8A80;
  border-radius: 5px;
  min-width: 100px;
}

.search-input-group {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 8px 10px;
  border: 2px solid #9A8A80;
  border-radius: 5px 0 0 5px;
  width: 250px;
}

.search-button {
  padding: 8px 10px;
  background-color: white;
  border: 2px solid #9A8A80;
  border-left: none;
  border-radius: 0 5px 5px 0;
}

.write-button {
  padding: 10px 16px;
  background-color: #BA7851;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'NanumGothic';
}

.write-button:hover {
  background-color: #9B4B1C;
}

/* 아이콘 스타일링 */
.bi-arrow-left-short, .bi-arrow-right-short {
  margin-top: 2px;
  font-size: 20px;
  font-weight: 900; /* bolder보다 더 두꺼운 수치 지정 */
  -webkit-text-stroke: 1px; /* 두께 증가 */
  color: #4F3322;
}

.bi-search {
  font-size: 16px;
  font-weight: 900; /* bolder보다 더 두꺼운 수치 지정 */
  -webkit-text-stroke: 1px; /* 두께 증가 */
  color: #4F3322;
}
</style>