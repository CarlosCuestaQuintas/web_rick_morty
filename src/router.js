import { createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import EpisodioPage from './pages/EpisodioPage.vue';
import PersonajePage from './pages/PersonajePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASEURL),
    routes: [
        {
            path: '/',
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomePage
                },
                {
                    path: 'episodio/:id',
                    name: 'EpisodioPage',
                    component: EpisodioPage
                },
                {
                    path: 'personaje/:id',
                    name: 'PersonajePage',
                    component: PersonajePage
                }
            ]
        }
    ]
})
export default router;