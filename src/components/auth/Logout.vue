<template>
  <div class="container">
    <div class="section-header">
      <h2 class="title">로그아웃</h2>
    </div>
    <div class="content">
      <p class="message">로그아웃하시겠습니까?</p>
        <div class="button-group">
          <button @click="handleLogout" class="btn confirm">확인</button>
          <button @click="$router.go(-1)" class="btn cancel">취소</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    handleLogout() {
      localStorage.removeItem('isLoggedIn')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/style.css";

.container {
  width: 100%;
  font-family: 'NanumGothic';
  color: #4F3322;
}

.content {
  margin-left: 20px;
  margin-top: 30px;
}

.message {
  font-size: 18px;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.confirm {
  background-color: #BA7851;
  color: white;
}

.confirm:hover {
  background-color: #9B4B1C;
}

.cancel {
  background-color: #9A8A80;
  color: white;
}

.cancel:hover {
  background-color: #5A4A41;
}
</style>