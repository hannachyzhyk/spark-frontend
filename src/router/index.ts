import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue';
import TaskListView from '../views/TaskListView.vue';
import ProfileView from '../views/ProfileView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/task/:id', component: TaskView },
    { path: '/tasks', component: TaskListView },
    { path: '/profile', component: ProfileView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView }
  ],
})

export default router
