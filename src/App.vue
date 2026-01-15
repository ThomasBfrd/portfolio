<script setup lang="ts">
import { ref } from 'vue';
import { MENU_ITEMS } from './shared/const/menu-items';
import { PROFILE } from './shared/const/profile';
import ArrowRight from "./assets/svg/arrow-right.svg?component";

const sidebarOpen = ref(false);
</script>

<template>
  <div class="bg-zinc-900">
    <div class="max-w-[1440px] flex flex-col mx-auto bg-zinc-900 text-zinc-300">
      <div class="sm:hidden flex justify-between items-center p-4 border-b border-zinc-800">
        <p class="font-bold text-xl p-4">{{ PROFILE.name }}</p>
        <button @click="sidebarOpen = !sidebarOpen" class="p-2 border border-zinc-600 rounded cursor-pointer">
          ☰
        </button>
      </div>

      <div class="grid sm:grid-cols-[280px_1fr]">

        <aside class="bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col items-center justify-center gap-6
            sm:flex-col sm:block sm:relative sm:h-auto sm:translate-x-0" :class="{
              'fixed z-20 top-0 left-0 h-full w-[280px] transform transition-transform duration-300': true,
              '-translate-x-full': !sidebarOpen,
              'translate-x-0': sidebarOpen
            }">
          <button class="self-end sm:hidden mb-4 p-2 border border-zinc-600 rounded cursor-pointer"
            @click="sidebarOpen = false">
            ✕
          </button>

          <div class="rounded-full h-[120px] w-[120px] overflow-hidden mx-auto">
            <img class="object-cover h-full w-full" src="/public/profile.jpg" alt="profile-picture">
          </div>

          <p class="text-zinc-300 text-center">@thomasbfrd</p>

          <div class="flex flex-row gap-4">
            <div class="langages"></div>
            <div class="light-dark"></div>
          </div>

          <div class="w-full">
            <ul class="flex flex-col gap-4 mt-6">
              <li v-for="item in MENU_ITEMS" :key="item.label">
                <RouterLink :to="item.route" @click="sidebarOpen = !sidebarOpen"
                  class="cursor-pointer flex justify-between px-4 items-center p-2 hover:text-white border border-zinc-700 rounded-[8px] hover:bg-zinc-800 transition-all duration-200 group">
                  <component :is="item.icon"
                    class="h-5 w-5 fill-zinc-300 group-hover:fill-white group-hover:-rotate-15 transition-all duration-200" />
                  <span>{{ item.label }}</span>
                  <ArrowRight class="h-5 w-5 fill-zinc-300 group-hover:fill-white transition-all duration-200" />
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class="mt-8 flex justify-center mx-auto">
            <svg height="230px" width="230px" viewBox="0 0 230 230">
              <image
                xlink:href="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=thomasBfrd&layout=compact&theme=github_dark"
                width="230" height="230" />
            </svg>
          </div>
        </aside>
        <div class="min-h-screen max-w-screen w-full p-8 border-b border-zinc-800">
          <main class="flex flex-col">
            <RouterView v-slot="{ Component }">
              <Transition mode="out-in" enter-active-class="transition-all duration-300"
                enter-from-class="opacity-0 translate-y-4" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-300" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4">
                <component :is="Component" :key="$route.path" />
              </Transition>
            </RouterView>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>