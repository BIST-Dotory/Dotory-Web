<template>
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">DOTORY</div>
      <div class="menu-container">
        <div class="main-menu">
          <router-link to="/dashboard" class="menu-item">DashBoard</router-link>
          <router-link to="/notice" class="menu-item bordered">Notice</router-link>
          <router-link to="/suggest" class="menu-item bordered">Suggest</router-link>
          <router-link to="/outing" class="menu-item bordered">Outing</router-link>
          <router-link to="/room" class="menu-item bordered">Room</router-link>
          <router-link to="/approval" class="menu-item bordered">Approval</router-link>
          <router-link to="/calendar" class="menu-item bordered">Calendar</router-link>
        </div>
        <div class="bottom-menu">
          <router-link to="/setting" class="menu-item bordered">Setting</router-link>
          <router-link to="/logout" class="menu-item bordered" @click="handleLogout">Logout</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    handleLogout() {
      localStorage.removeItem('isLoggedIn')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #30407E;
  color: white;
  display: flex;
  flex-direction: column;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.5rem;
}

.menu-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem); /* 로고 높이를 제외한 나머지 */
}

.main-menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.bottom-menu {
  margin-top: auto;
}

.menu-item {
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
  display: block;
}

.menu-item:hover {
  background-color: #f5f5f5;
  color: #30407E
}

.menu-item.bordered {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.menu-item.router-link-active {
  background-color: #f5f5f5;
  color: #30407E
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
}
</style>