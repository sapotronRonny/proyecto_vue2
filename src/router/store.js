import { createRouter, createWebHistory } from 'vue-router'
import heder_vue from '../components/cuadrolog.vue';
import cuadroreg from '../components/cuadroreg.vue';
import cuadrolog from '../components/cuadrolog.vue';
import casita from '../components/home.vue';
import cursos from '../components/cursos.vue';
import contacto from '../components/contactanos.vue';
import vistaprevia1 from '../components/vistaprevia1.vue';
import vistaprevia2 from '../components/vistaprevia2.vue';
import vistaprevia3 from '../components/vistaprevia3.vue';
import vistaprevia4 from '../components/vistaprevia4.vue';
import vistaprevia5 from '../components/vistaprevia5.vue';
import vistaprevia6 from '../components/vistaprevia6.vue';
import miscursos from '../components/miscursos.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {path: '/',name: 'home',component: heder_vue},
    {path: '/registro',name: 'registro',component: cuadroreg},
    {path: '/login',name: 'login',component: cuadrolog},
    {path: '/casita',name: 'casita',component: casita},
    {path: '/cursos',name: 'cursos',component: cursos},
    {path: '/contacto',name: 'contacto',component: contacto},
    {path: '/vistaprevia1',name: 'vistaprevia1',component: vistaprevia1},
    {path: '/vistaprevia2',name: 'vistaprevia2',component: vistaprevia2},
    {path: '/vistaprevia3',name: 'vistaprevia3',component: vistaprevia3},
    {path: '/vistaprevia4',name: 'vistaprevia4',component: vistaprevia4},
    {path: '/vistaprevia5',name: 'vistaprevia5',component: vistaprevia5},
    {path: '/vistaprevia6',name: 'vistaprevia6',component: vistaprevia6},
    {path: '/miscursos',name: 'miscursos',component: miscursos},
  
    ]
  })
  
  export default router