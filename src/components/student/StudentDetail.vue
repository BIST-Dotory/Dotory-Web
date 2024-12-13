<template>
  <div class="container">
    <div class="section-title">
      <h2 class="title">학생정보</h2>
    </div>
    <div class="content">
      <div class="detail">
        <div class="form-container">
          <div class="form-group">
            <label for="room">호실</label>
            <input id="room" type="number" v-model="formData.room" />
          </div>

          <div class="form-group">
            <label for="name">이름</label>
            <input id="name" type="text" v-model="formData.name" />
          </div>

          <div class="form-group">
            <label for="student-id">학번</label>
            <input id="student-id" type="text" v-model="formData.number" readonly />
          </div>

          <div class="form-group">
            <label for="major">전공</label>
            <input id="major" type="text" v-model="formData.major" />
          </div>

          <div class="form-group">
            <label for="tel">전화번호</label>
            <input id="tel" type="tel" v-model="formData.tel" />
          </div>

          <div class="form-group">
            <label for="penalty">상·벌점</label>
            <input id="penalty" type="number" v-model="formData.point" />
          </div>

          <div class="form-group">
            <label for="notes">특이사항</label>
            <textarea id="notes" v-model="formData.notes" placeholder="특이사항을 입력하세요"></textarea>
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
            <button class="btn-rewrite" @click="editStudent">
              <i class="bi bi-pencil"></i>
              수정
            </button>
            &nbsp;&nbsp;
            <button class="btn-delete" @click="showDialog = true">
              <i class="bi bi-trash"></i>
              탈퇴
            </button>
          </div>
          <div class="dialog-overlay" v-if="showDialog">
            <div class="dialog-box">
              <h3 class="dialog-title">회원탈퇴 처리하겠습니까?</h3>
              <p class="dialog-message">탈퇴한 회원정보는 복구되지 않습니다.</p>
              <div class="dialog-buttons">
                <button class="dialog-btn" @click="goBack">탈퇴</button>
                <button class="dialog-btn-cancel" @click="showDialog = false">취소</button>
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
  name: 'StudentDetail',
  props: {
    id: { // 라우트 파라미터를 prop으로 받음
      type: String,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      formData: {
        room: '101',
        name: '가나다',
        number: '20000001',
        major: '국어국문학과',
        tel: '010-0000-0000',
        point: '0',
        notes: '',
      },
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Student' })
    },
  }
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 1rem 0 1rem;
}

.form-group {
  display: flex;
  align-items: center;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #8b4513;
  /* 어두운 브라운 */
  width: 120px;
  /* 라벨의 고정 너비 설정 */
  text-align: left;
  /* 왼쪽 정렬 */
}

input {
  width: 15rem;
  /* 고정 너비 설정 */
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

textarea {
  flex: 1;
  min-height: 10rem;
  /* 높이 설정 */
  width: 100%;
  /* 부모 컨테이너 기준 100% 너비 설정 */
  padding: 8px;
  resize: none;
  /* 크기 조정 비활성화 */
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
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

.btn-list,
.btn-rewrite,
.btn-delete {
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

.btn-list:hover,
.btn-rewrite:hover,
.btn-delete:hover {
  background-color: #9B4B1C;
}

.bi-list,
.bi-pencil,
.bi-trash {
  font-size: 20px;
  margin-top: 5px;
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
