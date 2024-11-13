<!-- Login.vue -->
<template>
  <div class="login-container">
    <h1 class="logo">DOTORY</h1>
    <div class="login-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Username</label>
          <input 
            type="text" 
            v-model="username"
            placeholder="Enter your username"
          >
        </div>

        <div class="form-group">
          <label>Password</label>
          <input 
            type="password" 
            v-model="password"
            placeholder="Enter your Password"
          >
        </div>

        <div class="form-options">
          <div class="remember-me">
            <input 
              type="checkbox" 
              id="remember"
              v-model="rememberMe"
            >
            <label for="remember">Remember me</label>
          </div>
          <a href="#" class="forgot-password">Forgot Password ?</a>
        </div>

        <button type="submit">Login</button>
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
@import url('../../public/css/style.css');
</style>