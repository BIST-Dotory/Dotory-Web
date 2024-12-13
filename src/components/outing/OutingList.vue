<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">외출외박</h2>
    </div>
    <div class="content">
      <table class="board-table">
        <thead>
          <tr>
            <th>외출/외박</th>
            <th>호실</th>
            <th>작성자</th>
            <th>목적지</th>
            <th>출발</th>
            <th>도착</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedItems" :key="item.id" @click="goToDetail(item.id)">
            <!-- 번호는 전체 데이터 기준으로 계산 -->
            <td>{{ item.outing }}</td>
            <td>{{ item.room }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.dest }}</td>
            <td>{{ item.eta }}</td>
            <td>{{ item.etd }}</td>
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
              <option value="room">호실</option>
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
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, outing: '외출', room: '101', author: '사용자', dest: '덕천', eta: '11.01 12:00', etd: '11.01 21:00' },
        { id: 2, outing: '외박', room: '201', author: '사용자', dest: '김포', eta: '11.01 14:00', etd: '11.02 21:00' },
        { id: 3, outing: '외출', room: '301', author: '사용자', dest: '울산', eta: '11.01 12:00', etd: '11.01 21:00' },
        { id: 4, outing: '외박', room: '401', author: '사용자', dest: '부산', eta: '11.01 10:00', etd: '11.02 22:00' },
        { id: 5, outing: '외출', room: '501', author: '사용자', dest: '서면', eta: '11.01 18:00', etd: '11.01 21:00' },
        { id: 6, outing: '외박', room: '601', author: '사용자', dest: '덕천', eta: '11.01 12:00', etd: '11.03 11:00' },
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
        if (this.searchOption === 'outing') {
          return item.room.toLowerCase().includes(keyword);
        } else if (this.searchOption === 'author') {
          return item.author.toLowerCase().includes(keyword);
        } else if (this.searchOption === 'all') {
          return (
            item.outing.toLowerCase().includes(keyword) ||
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
      this.$router.push(`outing/${id}`);
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
  width: 8%;
}

.board-table th:nth-child(2) {
  width: 8%;
}

.board-table th:nth-child(3) {
  width: 8%;
  padding-right: 30px;
}

.board-table tbody tr td:nth-child(3) {
  width: 8%;
  padding-right: 30px;
}

.board-table th:nth-child(4) {
  width: 30%;
  text-align: left;
}

.board-table tbody tr td:nth-child(4) {
  width: 30%;
  text-align: left;
}

.board-table th:nth-child(5) {
  width: 10%;
}

.board-table th:last-child {  
  width: 10%;
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