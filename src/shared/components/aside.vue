<script setup lang="ts">
import { MENU_ITEMS } from '../const/menu-items';
import About from './about.vue';

defineProps<{
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    setRouterPath: (path: string) => void;
}>();
</script>

<template>
    <aside class="bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col items-center justify-start h-full gap-6
            sm:flex-col sm:min-h-screen sm:relative sm:h-auto sm:translate-x-0" :class="{
                'fixed z-20 top-0 left-0 h-full w-[280px] transform transition-transform duration-300': true,
                '-translate-x-full': !sidebarOpen,
                'translate-x-0': sidebarOpen
            }">
        <button class="self-end sm:hidden mt-6 mb-4 p-2 border border-zinc-600 rounded cursor-pointer"
            @click="setSidebarOpen(false)">
            ✕
        </button>

        <div
            class="rounded-full h-[120px] w-[120px] mx-auto mb-4 overflow-hidden border-3 border-zinc-300 flex-shrink-0">
            <img class="object-cover h-full w-full" src="/profile.jpg" alt="profile-picture">
        </div>

        <p class="text-zinc-300 text-center">@thomasbfrd</p>

        <div class="w-full">
            <ul class="flex flex-col gap-4 mt-6">
                <li v-for="item in MENU_ITEMS" :key="item.label">
                    <RouterLink :to="item.route" @click="setSidebarOpen(!sidebarOpen)"
                        class="cursor-pointer flex justify-between px-4 items-center p-2 hover:text-white border border-zinc-700 rounded-[8px] hover:bg-zinc-800 transition-all duration-200 group">
                        <component :is="item.icon"
                            class="h-5 w-5 fill-zinc-300 group-hover:fill-white group-hover:-rotate-15 transition-all duration-200" />
                        <span>{{ item.label }}</span>
                        <ArrowRight class="h-5 w-5 fill-zinc-300 group-hover:fill-white transition-all duration-200" />
                    </RouterLink>
                </li>
            </ul>
        </div>
        <About :isCentered="true" class="mt-auto justifyself-end"/>
    </aside>
</template>