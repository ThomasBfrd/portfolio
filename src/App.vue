<script setup lang="ts">
import { ref } from 'vue';
import { PROFILE } from './shared/const/profile';
import Aside from './shared/components/aside.vue';

const sidebarOpen = ref(false);
const path = ref("");
const setSidebarOpened = (open: boolean) => sidebarOpen.value = open;
const setRouterPath = (newPath: string) => path.value = newPath;
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

      <RouterLink :to="path"></RouterLink>
      <div class="grid sm:grid-cols-[280px_1fr]">
        <Aside :sidebar-open="sidebarOpen" :set-sidebar-open="setSidebarOpened" :set-router-path="setRouterPath" />
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