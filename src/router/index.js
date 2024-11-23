import { createRouter, createWebHistory } from 'vue-router'
import Login from '~/auth/Login.vue'
import Navigation from '~/navigation/Navigation.vue'
import DashBoard from '~/dashboard/DashBoard.vue'
import NoticeDetail from '~/notice/NoticeDetail.vue'
import NoticeList from '~/notice/NoticeList.vue'
import NoticeWrite from '~/notice/NoticeWrite.vue'
import SuggestDetail from '~/suggest/SuggestDetail.vue'
import SuggestList from '~/suggest/SuggestList.vue'
import OutingDetail from '~/outing/OutingDetail.vue'
import OutingList from '~/outing/OutingList.vue'
import StudentDetail from '~/student/StudentDetail.vue'
import StudentList from '~/student/StudentList.vue'
import Approval from '~/approval/Approval.vue'
import Setting from '~/auth/Setting.vue'
import Logout from '~/auth/Logout.vue'

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
        component: NoticeList
      },
      {
        path: 'notice/:id',
        name: 'NoticeDetail',
        component: NoticeDetail,
        props: true
      },
      {
        path: 'notice/write',
        name: 'NoticeWrite',
        component: NoticeWrite
      },
      {
        path: 'suggest',
        name: 'Suggest',
        component: SuggestList
      },
      {
        path: 'suggest/:id',
        name: 'SuggestDetail',
        component: SuggestDetail,
        props: true
      },
      {
        path: 'outing',
        name: 'Outing',
        component: OutingList
      },
      {
        path: 'outing/:id',
        name: 'OutingDetail',
        component: OutingDetail,
        props: true
      },
      {
        path: 'student',
        name: 'Student',
        component: StudentList
      },
      {
        path: 'student/:id',
        name: 'StudentDetail',
        component: StudentDetail,
        props: true
      },
      {
        path: 'approval',
        name: 'Approval',
        component: Approval
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