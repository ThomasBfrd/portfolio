<script setup lang="ts">
import { ref, watch } from 'vue';
import Aside from './shared/components/aside.vue';
import ProfilePicture from './shared/components/profile-picture.vue';
import { PROFILE } from './shared/const/profile';

const sidebarOpen = ref(false);
const path = ref("");
const setSidebarOpened = (open: boolean) => sidebarOpen.value = open;
const setRouterPath = (newPath: string) => path.value = newPath;

watch(sidebarOpen, (isOpen) => {
  document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
})
</script>

<template>
  <div class="bg-zinc-900">
    <div class="max-w-[1440px] flex flex-col mx-auto bg-zinc-900 text-zinc-300">
      <div class="sm:hidden flex justify-between items-center border-b border-zinc-800">
        <div class="flex items-center gap-4 ml-6 p-6">
          <div class="h-[60px] w-[60px]">
            <ProfilePicture class="w-full h-full" />
          </div>
          <div class="flex flex-col items-start">
            <h1 class="text-3xl font-bold text-zinc-100">{{ PROFILE.name }}</h1>
            <p class="text-md text-zinc-400 italic">{{ PROFILE.email }}</p>
          </div>
        </div>
        <button @click="sidebarOpen = !sidebarOpen" class="p-2 mr-6 border border-zinc-600 rounded cursor-pointer">
          ☰
        </button>
      </div>

      <RouterLink :to="path"></RouterLink>
      <div class="grid sm:grid-cols-[280px_1fr]">
        <Aside :sidebar-open="sidebarOpen" :set-sidebar-open="setSidebarOpened" :set-router-path="setRouterPath" />
        <div class="min-h-screen max-w-screen w-full p-4 border-b border-zinc-800">
          <main class="flex flex-col" :class="sidebarOpen && 'overflow-hidden h-screen'">
            <div v-if="sidebarOpen" class="md:hidden bg-zinc-950/80 h-screen fixed inset-0 z-10 backdrop-blur-[3px]"></div>
            <RouterView v-slot="{ Component }">
              <Transition as="template" mode="out-in" enter-active-class="transition-all duration-300"
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