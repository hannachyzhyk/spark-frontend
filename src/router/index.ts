import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue';
import TaskListView from '../views/TaskListView.vue';
import ProfileView from '../views/ProfileView.vue';
import DashboardView from '../views/DashboardView.vue';
import Layout from '../views/Layout.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { useCurrentUserStore } from '../stores/currentUser';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', component: RegisterView },
    { path: '/login', component: LoginView },
    {
      path: '/',
      component: Layout,
      children: [
        { path: 'dashboard', component: DashboardView },
        { path: 'task/:id', component: TaskView },
        { path: 'tasks', component: TaskListView },
        { path: 'profile', component: ProfileView }
      ]
    },
    {
      path: '/:pathMatch(.*)*', component: NotFoundView,
    }
  ],
})

router.beforeEach(async (to, from) => {

  const isAuthenticated = useCurrentUserStore().isAuthenticated || true;
  if (
    // make sure the user is authenticated
    !isAuthenticated && to.path !== '/login'
  ) {
    // redirect the user to the login page
    return { path: '/login' }
  }
})

export default router
