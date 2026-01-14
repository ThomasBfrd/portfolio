import { createMemoryHistory, createRouter } from 'vue-router'

import Home from "./views/Home.vue";
import Experiences from "./views/Experiences.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/experiences", component: Experiences },
    { path: "/projects", component: Projects },
    { path: "/about", component: About },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});