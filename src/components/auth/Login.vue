<template>
  <div class="login-container">
    <div class="login-logo-section mb-4">
      <img src="@/assets/images/logo.png" alt="Dotory Logo" class="logo-img" />
      <div class="login-title-section">
        <div class="login-sub-title">우리들의 휴식공간</div>
        <div class="login-main-title">DOTORY</div>
      </div>
    </div>

    <div class="login-form">
      <form @submit.prevent="submitForm">
        <div class="login-form-group">
          <label for="user-id" class="login-label">아이디</label>
          <input type="text" class="login-input" id="user-id" v-model="userId" placeholder="아이디를 입력하세요" required />
        </div>

        <div class="login-form-group">
          <label for="password" class="login-label">비밀번호</label>
          <input type="password" class="login-input" id="password" v-model="password" placeholder="비밀번호를 입력하세요"
            required />
        </div>

        <div class="login-form-check-section d-flex justify-content-between align-items-center">
          <div class="login-form-check">
            <input type="checkbox" class="login-checkbox" id="remember-me" v-model="rememberMe" />
            <label class="login-checkbox-label" for="remember-me">로그인 상태 유지</label>
          </div>
          <a href="#" class="login-forgot-password">비밀번호 찾기</a>
        </div>
        
        <button type="submit" class="login-submit-button w-100">로그인</button>
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
      rememberMe: false,
    };
  },
  methods: {
    submitForm() {
      if (!this.userId || !this.password) {
        alert('아이디와 비밀번호를 모두 입력해주세요.');
        return;
      }
      localStorage.setItem('isLoggedIn', 'true');
      this.$router.push('/dashboard');
    },
    login() {
      localStorage.setItem('isLoggedIn', 'true')
      this.$router.push('/dashboard')
    }
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  font-family: 'NanumGothic', sans-serif;
  color: #4f3322;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
}

.login-logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.logo-img {
  width: 120px;
  height: 120px;
}

.login-title-section {
  text-align: left;
  margin-left: -20px;
}

.login-sub-title {
  font-size: 20px;
  color: #9a8a80;
  margin-top: 15px;
}

.login-main-title {
  font-size: 48px;
  font-weight: bold;
  font-family: 'Baloo2-ExtraBold', sans-serif;
  color: #4f3322;
  margin-top: -15px;
}

.login-form {
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
}

.login-form-group {
  margin-bottom: 20px;
}

.login-label {
  display: block;
  margin-bottom: 10px;
  font-family: 'NanumGothic', sans-serif;
  color: #4f3322;
}

.login-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #9a8a80;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'NanumGothic', sans-serif;
  color: #4f3322;
}

.login-input::placeholder {
  color: #9a8a80;
}

.login-form-check-section {
  margin: 15px 0;
  font-family: 'NanumGothic', sans-serif;
}

.login-checkbox {
  border: 1px solid #9a8a80;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #9a8a80;
  cursor: pointer;
  position: relative;
  margin-right: 5px;
  vertical-align: middle;
}

.login-checkbox:checked {
  background-color: #ba7851;
}

.login-checkbox:checked::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

.login-checkbox-label {
  font-size: 14px;
  color: #4f3322;
  vertical-align: middle;
}

.login-forgot-password {
  font-size: 14px;
  text-decoration: none;
  color: #4f3322;
}

.login-submit-button {
  background-color: #ba7851;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'NanumGothicBold', sans-serif;
}

.login-submit-button:hover {
  background-color: #9b4b1c;
  color: #ffffff;
}

.login-input:focus {
  border-color: #9a8a80;
  box-shadow: none;
  outline: none;
}

.login-checkbox:focus {
  outline: none;
}
</style>