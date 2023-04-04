import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('./components/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/view/Home.vue'),
        children: [
            {
                path: 'chat',
                name: 'chat',
                component: () => import('@/components/Chat.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router