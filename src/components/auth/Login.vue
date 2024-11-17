<template>
  <div class="container">
    <div class="logo-section mb-4">
      <img src="@/assets/images/logo.png" alt="Dotory Logo" class="logo-img">
      <div class="title-section">
        <div class="sub-title">우리들의 휴식공간</div>
        <div class="main-title">DOTORY</div>
      </div>
    </div>

    <div class="login-form">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="userId">아이디</label>
          <input type="text" class="form-control" id="userId" v-model="userId" placeholder="아이디를 입력하세요">
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="비밀번호를 입력하세요">
        </div>

        <div class="form-check-section d-flex justify-content-between">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe" v-model="rememberMe">
            <label class="form-check-label" for="rememberMe">로그인 상태 유지</label>
          </div>
          <a href="#" class="forgot-password">비밀번호 찾기</a>
        </div>

        <button @click="Login" class="btn btn-login w-100">로그인</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleSubmit() {
      // Here you would typically validate credentials
      // For now, we'll just redirect to dashboard
      localStorage.setItem('isLoggedIn', 'true')
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 100px auto;
  padding: 20px;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.logo-img {
  width: 120px;
  height: 120px;
}

.title-section {
  text-align: left;
  margin-left: -20px;
}

.sub-title {
  font-size: 20px;
  font-family: 'NanumGothic';
  color: #9A8A80;
  margin-top: 15px;
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  font-family: 'Baloo2-ExtraBold';
  color: #4F3322;
  margin-top: -15px;
}

.login-form {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: 'NanumGothic';
  color: #4F3322;
}

.form-group input {
  font-family: 'NanumGothic';
  color: #4F3322;
}
.form-group input::placeholder {
  color: #9A8A80;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
}

.form-check-section {
  margin: 15px 0;
  font-family: 'NanumGothic';
}

.form-check-label {
  font-size: 14px;
  color: #4F3322;
}

.forgot-password {
  font-size: 14px;
  text-decoration: none;
  color: #4F3322;
}

.btn-login {
  background-color: #BA7851;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'NanumGothicBold';
}

.btn-login:hover {
  background-color: #9B4B1C;
  color: #4F3322;
}
</style>