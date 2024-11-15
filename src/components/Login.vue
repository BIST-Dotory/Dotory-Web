<!-- Login.vue -->
<template>
  <div class="login-container">
    <h1 class="logo">DOTORY</h1>
    <div class="login-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>아이디</label>
          <input 
            type="text" 
            v-model="username"
            placeholder="아이디를 입력하세요."
          >
        </div>

        <div class="form-group">
          <label>비밀번호</label>
          <input 
            type="password" 
            v-model="password"
            placeholder="비밀번호를 입력하세요."
          >
        </div>

        <div class="form-options">
          <div class="remember-me">
            <input 
              type="checkbox" 
              id="remember"
              v-model="rememberMe"
            >
            <label for="remember">로그인 상태 유지</label>
          </div>
          <a href="#" class="forgot-password">비밀번호 찾기</a>
        </div>

        <button type="submit">로그인</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
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
nav, main {
  border: 2px solid #000;
  margin-bottom: 10px;
  padding: 10px;
}

nav > a + a {
  margin-left: 10px;
}

h2 {
  border-bottom: 1px solid #ccc;
  margin: 0 0 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: #000000;
  font-family: "NanumGothic";
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  font-family: "NanumGothic"
}

.form-group input::placeholder {
  color: #aaa;
  font-family: "NanumGothicLight"
}

.form-group input:focus {
  outline: none;
  border-color: #30407E;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "NanumGothic";
}

.remember-me input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin: 0;
}

.forgot-password {
  color: #666;
  text-decoration: none;
  font-family: "NanumGothic";
}

button {
  width: 100%;
  padding: 12px;
  background-color: #30407E;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "NanumGothicBold";
}

button:hover {
  background-color: #30407e95;
}

@media (max-width: 480px) {
  .login-card {
    margin: 0 1rem;
  }
}
</style>