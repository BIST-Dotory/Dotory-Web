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
            <td>자유 게시글</td>
            <td>관리자</td>
            <td>2024.01.01</td>
            <td>0</td>
          </tr>
          <tr>
            <td>1</td>
            <td>공지사항 게시글</td>
            <td>관리자</td>
            <td>2024.01.01</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">...</a></li>
          <li class="page-item"><a class="page-link" href="#">50</a></li>
          <li class="page-item"><a class="page-link" href="#">51</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- 검색 및 글쓰기 버튼 -->
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <select class="form-select w-auto me-2">
              <option selected>전체</option>
            </select>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="검색어를 입력해주세요.">
              <button class="btn btn-outline-secondary" type="button">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <button type="button" class="btn btn-warning">
            <i class="bi bi-pencil"></i>
            글쓰기
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    visiblePages() {
      let pages = [];
      if (this.totalPages <= 5) {
        pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      } else {
        if (this.currentPage <= 3) {
          pages = [1, 2, 3, 4, '...', this.totalPages];
        } else if (this.currentPage >= this.totalPages - 2) {
          pages = [1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages];
        } else {
          pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages];
        }
      }
      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.$emit('update:currentPage', page);
      }
    },
  },
};
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

.page-item.active .page-link {
  background-color: #b3754e;
  border-color: #b3754e;
  color: white;
}
.page-link {
  color: #b3754e;
}
.page-link:hover {
  color: #8c5a38;
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