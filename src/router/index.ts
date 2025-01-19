import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RateCookieView from '@/views/RateCookieView.vue'
import LikeFeedView from '@/views/FeedView.vue'
import UserView from '@/views/UserView.vue'
import PlaceListView from '@/views/PlaceListView.vue'
import PlaceDetailView from '@/views/PlaceDetailView.vue'
import useAuthStore from '@/stores/authStore';

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
      meta: { requiresAuth: true }
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
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/auth/Login.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.loading) {
    // Attendre l'initialisation de l'auth
    await authStore.init();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router
