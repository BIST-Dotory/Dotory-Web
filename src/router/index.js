import { createRouter, createWebHistory } from 'vue-router'
import Login from '~/auth/Login.vue'
import Navigation from '~/navigation/Navigation.vue'
import DashBoard from '~/dashboard/DashBoard.vue'



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Navigation,
    children: [
      {
        path: '',
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