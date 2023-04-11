import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import FirstView from '../components/FirstView'
import SecondView from '../components/SecondView'
import ThirdView from '../components/ThirdView'
import FourthView from '../components/FourthView'

// 라우터 설계
const routes = [
  { path: '/1', component:FirstView},
  { path: '/2', component:SecondView},
  { path: '/3', component:ThirdView},
  { path: '/4', component:FourthView},
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 라우터 추출 (main.js에서 import)
export {router}
