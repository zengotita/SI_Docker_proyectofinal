import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import DepartamentoView from "@/views/DepartamentoView.vue";
import HabilidadView from "@/views/HabilidadView.vue";
import EmpleadoView from "@/views/EmpleadoView.vue";

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/departamentos',
            name: 'departamentos',
            component: DepartamentoView
        },
        {
            path: '/habilidades',
            name: 'habilidades',
            component: HabilidadView
        },
        {
            path: '/empleados',
            name: 'empleados',
            component: EmpleadoView
        }
    ]
});

export default router
