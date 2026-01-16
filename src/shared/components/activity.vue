<script setup lang="ts">
import { ref } from "vue";
import type { Activity } from "../interfaces/activity.interface";

defineProps({
    activities: Array as () => Activity[]
})

const displayImg = ref({
    isOpened: false,
    currentImg: ""
});

const toggleImg = () => {
    displayImg.value.isOpened = !displayImg.value.isOpened;
}
</script>

<template>
    <section class="border-b border-zinc-800">
        <ul class="flex flex-col gap-8">
           <li v-for="experience in activities" :key="experience.company"
                class="flex flex-col gap-4 [&:not(:last-child)]:border-b border-zinc-800 pb-6">

              <div v-if="displayImg.isOpened && displayImg.currentImg === experience.screen" class="w-screen h-screen fixed inset-0 z-50 top-0 left-0 bg-zinc-950/80 backdrop-blur-[4px] 
                flex items-center justify-center cursor-pointer" @click="toggleImg">
                    <div class="w-[90%] overflow-hidden rounded-md border border-zinc-700">
                        <img :src="displayImg.currentImg" :alt="experience.title" />
                    </div>
                </div>
               <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div class="rounded-md h-[80px] w-[80px] overflow-hidden flex-shrink-0">
                        <img :src="experience.image" class="object-cover h-full w-full" alt="company-logo">
                    </div>
                    <div>
                        <p class="text-2xl font-bold text-zinc-300">{{ experience.title }}</p>
                        <p class="text-md text-zinc-400 italic">{{ experience.period }}</p>
                    </div>
                </div>

              <div class="flex flex-wrap gap-2 mt-2">
                    <span v-for="techno in experience.tools" :key="techno"
                       class="w-[125px] text-center text-[14px] text-zinc-300 border border-zinc-600 rounded-full bg-zinc-800 cursor-pointer hover:bg-zinc-700 hover:text-white transition-colors duration-200 p-1">
                        {{ techno }}
                    </span>
                </div>

              <ul class="mt-4 ml-4 list-disc list-outside text-zinc-300">
                    <li v-for="task in experience.description" :key="task" class="text-wrap">
                        {{ task }}
                    </li>
                </ul>
                <div class="mt-4 rounded-md overflow-hidden border border-zinc-700" v-if="experience.screen">
                   <img :src="experience.screen" class="cursor-pointer"
                        @click="() => { toggleImg(); displayImg.currentImg = experience.screen; }" />
                </div>
            </li>
        </ul>
    </section>
</template>