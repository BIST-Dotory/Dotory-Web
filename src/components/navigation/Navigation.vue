<template>
  <div class="app-container">
    <nav class="sidebar">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="Dotory Logo" class="logo">
      </div>
      <div class="nav-container">
        <div class="nav-menu">
          <router-link to="/dashboard" class="nav-item">대시보드</router-link>
          <router-link 
            to="/notice" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/notice') }">공지사항</router-link>
          <router-link 
            to="/suggest" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/suggest') }">건의사항</router-link>
          <router-link 
            to="/outing" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/outing') }">외출외박</router-link>
          <router-link 
            to="/student" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/student') }">학생정보</router-link>
          <router-link 
            to="/approval" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/approval') }">가입승인</router-link>
        </div>
        <div class="nav-bottom-item">
          <router-link 
            to="/setting" 
            class="nav-item"
            active-class="router-link-active"
            :class="{ 'router-link-active': $route.path.startsWith('/setting') }">설정</router-link>
          <router-link 
            to="/logout" 
            class="nav-item" 
            @click="handleLogout">로그아웃</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  height: 100vh;
  width: 150px;
  background-color: #BA7851;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.logo {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto 1rem auto
}

.nav-container {
  display: flex;
  flex-direction: column;
  height: calc(100% - 1rem);
  font-family: "NanumGothic";
  font-size: 18px;
}

.nav-menu {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.nav-bottom-item {
  position: relative; /* 부모 요소 기준으로 고정 */
  width: 100%;        /* 부모의 전체 너비에 맞춤 */
}

.nav-item {
  padding: 0.8rem 2rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
  display: block;
  position: relative;
  margin-right: -1px;
  /* 컨텐츠 영역과의 경계를 없애기 위해 */
  z-index: 1;
  /* 활성 메뉴 아이템을 앞으로 가져오기 */
  border-bottom: 1px solid #f5f5f5;
}

.nav-item:hover {
  background-color: #f5f5f5;
  color: #BA7851;
  font-family: "NanumGothicBold";
}

.nav-item.router-link-active {
  background-color: #f5f5f5;
  color: #BA7851;
  position: relative;
  font-family: "NanumGothicBold"
}

.nav-item.router-link-active::before {
  content: '';
  position: absolute;
  top: -20px;
  /* 상단 여백만큼 위로 */
  right: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 10px 0 10px #f5f5f5;
  /* 배경색과 동일한 색상 */
}

/* 오른쪽 하단 모서리 라운딩 */
.nav-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -20px;
  /* 하단 여백만큼 아래로 */
  right: 0;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-top-right-radius: 10px;
  box-shadow: 10px -10px 0 10px #f5f5f5;
  /* 배경색과 동일한 색상 */
}

.main-content {
  flex: 1;
  margin-left: 150px;
  padding: 5rem;
  background-color: #f5f5f5;
}
</style>