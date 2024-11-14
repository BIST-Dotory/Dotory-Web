import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import MainLayout from '../layouts/MainLayout.vue'
import DashBoard from '../components/DashBoard.vue'
import NoticeList from '../components/notice/NoticeList.vue'
import NoticeDetail from '../components/notice/NoticeDetail.vue'
import Suggest from '../components/Suggest.vue'
import Outing from '../components/Outing.vue'
import Room from '../components/Room.vue'
import Approval from '../components/Approval.vue'
import Calendar from '../components/Calendar.vue'
import Setting from '../components/Setting.vue'
import Logout from '../components/Logout.vue'

const routes = [
  // 로그인 페이지는 독립적인 경로
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // 메인 레이아웃을 사용하는 페이지들
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',  // 기본 경로는 대시보드로
        redirect: '/dashboard'
      },
      {
        path: 'dashboard',
        name: 'DashBoard',
        component: DashBoard
      },
      {
        path: 'notice',
        name: 'Notice',
        component: NoticeList,
      },
      {
        path: 'notice/:id',
        name: 'NoticeDetail',
        component: NoticeDetail,
        props: true
      },
      {
        path: 'suggest',
        name: 'Suggest',
        component: Suggest
      },
      {
        path: 'outing',
        name: 'Outing',
        component: Outing
      },
      {
        path: 'room',
        name: 'Room',
        component: Room
      },
      {
        path: 'approval',
        name: 'Approval',
        component: Approval
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'setting',
        name: 'Setting',
        component: Setting
      },
      {
        path: 'logout',
        name: 'Logout',
        component: Logout
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  
  if (to.path !== '/login' && !isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && isLoggedIn) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router