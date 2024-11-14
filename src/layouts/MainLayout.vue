<template>
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">DOTORY</div>
      <div class="menu-container">
        <div class="main-menu">
          <router-link to="/dashboard" class="menu-item">DashBoard</router-link>
          <router-link 
            to="/notice" 
            class="menu-item"
            :class="{ 'router-link-active': $route.path.startsWith('/notice') }">
            Notice
          </router-link>
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
  position: relative;
  margin-right: -1px;  /* 컨텐츠 영역과의 경계를 없애기 위해 */
  z-index: 1;  /* 활성 메뉴 아이템을 앞으로 가져오기 */
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
  color: #30407E;
  position: relative;
}

.menu-item.router-link-active::before {
  content: '';
  position: absolute;
  top: -20px;  /* 상단 여백만큼 위로 */
  right: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 10px 0 10px #f5f5f5;  /* 배경색과 동일한 색상 */
}

/* 오른쪽 하단 모서리 라운딩 */
.menu-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -20px;  /* 하단 여백만큼 아래로 */
  right: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-top-right-radius: 10px;
  box-shadow: 10px -10px 0 10px #f5f5f5;  /* 배경색과 동일한 색상 */
}

/* 메뉴 아이템 호버 효과 (선택사항) */
/* .menu-item:hover:not(.router-link-active) {
  background-color: rgba(245, 245, 245, 0.5);
} */

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
}
</style>