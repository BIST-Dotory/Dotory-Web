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
            <div v-for="notice in latestNotices" :key="notice.id" class="list-item"
              @click="goToNoticeDetail(notice.id)">
              <span class="item-title">{{ notice.title }}</span>
              <span class="item-info">
                <span class="author">{{ notice.author }}</span>
                <span class="date">{{ notice.date }}</span>
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
            <div v-for="suggest in latestSuggests" :key="suggest.id" class="list-item"
              @click="goToSuggestDetail(suggest.id)">
              <span class="item-title">{{ suggest.title }}</span>
              <span class="item-info">
                <span class="author">{{ suggest.author }}</span>
                <span class="date">{{ suggest.date }}</span>
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
            <div v-for="outing in latestOutings" :key="outing.id" class="list-item"
              @click="goToOutingDetail(outing.id)">
              <span class="item-title">{{ outing.title }}</span>
              <span class="item-info">
                <span class="author">{{ outing.author }}</span>
                <span class="date">{{ outing.date }}</span>
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
  name: 'DashBoard',
  data() {
    return {
      notices: [],
      suggests: [],
      outings: []
    }
  },

  computed: {
    latestNotices() {
      return this.notices
        .sort((a, b) => b.id - a.id)
        .slice(0, 5)
    },
    latestSuggests() {
      return this.suggests
        .sort((a, b) => b.id - a.id)
        .slice(0, 5)
    },
    latestOutings() {
      return this.outings
        .sort((a, b) => b.id - a.id)
        .slice(0, 12)
    }
  },

  methods: {
    async fetchNotices() {
      this.notices = [
        { id: 11, title: '열한번째 공지사항', author: '관리자', date: '2024.11.27' },
        { id: 12, title: '열두번째 공지사항', author: '관리자', date: '2024.11.28' },
        { id: 13, title: '열세번째 공지사항', author: '관리자', date: '2024.11.29' },
        { id: 14, title: '열네번째 공지사항', author: '관리자', date: '2024.11.30' },
        { id: 15, title: '열다섯번째 공지사항', author: '관리자', date: '2024.12.01' },
      ]
    },
    async fetchSuggests() {
      this.suggests = [
        { id: 1, title: '첫번째 건의사항', author: '사용자', date: '2024.11.27' },
        { id: 2, title: '두번째 건의사항', author: '가나다', date: '2024.11.27' },
        { id: 3, title: '세번째 건의사항', author: '라마바', date: '2024.11.29' },
        { id: 4, title: '네번째 건의사항', author: '도레미', date: '2024.11.30' },
        { id: 5, title: '다섯번째 건의사항', author: '알파벳', date: '2024.12.01' },
      ]
    },

    async fetchOutings() {
      this.outings = [
        { id: 1, title: '[외출] 102호', author: '가나다', date: '2024.11.19' },
        { id: 2, title: '[외출] 102호', author: '라마바', date: '2024.11.19' },
        { id: 3, title: '[외출] 103호', author: '도레미', date: '2024.11.19' },
        { id: 4, title: '[외출] 104호', author: '알파벳', date: '2024.11.19' },
        { id: 5, title: '[외박] 101호', author: '사용자', date: '2024.11.20' },
        { id: 6, title: '[외박] 102호', author: '가나다', date: '2024.11.22' },
        { id: 7, title: '[외박] 102호', author: '라마바', date: '2024.11.27' },
        { id: 8, title: '[외박] 103호', author: '도레미', date: '2024.11.28' },
        { id: 9, title: '[외출] 104호', author: '알파벳', date: '2024.11.30' },
        { id: 10, title: '[외박] 101호', author: '사용자', date: '2024.12.01' },
      ]
    },

    goToNoticeDetail(id) {
      this.$router.push(`/notice/${id}`)
    },

    goToSuggestDetail(id) {
      this.$router.push(`/suggest/${id}`)
    },

    goToOutingDetail(id) {
      this.$router.push(`/outing/${id}`)
    }
  },

  created() {
    this.fetchNotices()
    this.fetchSuggests()
    this.fetchOutings()
  }
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