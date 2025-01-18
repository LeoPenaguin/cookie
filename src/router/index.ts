import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RateCookieView from '@/views/RateCookieView.vue'
import LikeFeedView from '@/views/FeedView.vue'
import CurrentUserView from '@/views/CurrentUserView.vue'
import UserView from '@/views/UserView.vue'
import PlaceListView from '@/views/PlaceListView.vue'
import PlaceDetailView from '@/views/PlaceDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rate-cookie',
      name: 'rate cookie',
      component: RateCookieView,
    },
    {
      path: '/feed',
      name: 'feed',
      component: LikeFeedView,
    },
    {
      path: '/user',
      name: 'user',
      component: CurrentUserView,
    },
    {
      path: '/user/:id',
      name: 'single user',
      component: UserView,
    },
    {
      path: '/place-list',
      name: 'place-list',
      component: PlaceListView,
    },
    {
      path: '/place/:id',
      name: 'place-detail',
      component: PlaceDetailView
    },
  ],
})

export default router
