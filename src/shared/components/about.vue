<script setup lang="ts">
import { SOCIALS } from '../const/socials';

defineProps<{
    isCentered: boolean;
}>();

</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Contact</h2>
        <div class="flex flex-col justify-start items-center gap-4 mb-4"
            :class="isCentered ? 'items-center' : 'items-start'">
            <p>thomas.bfrd@gmail.com</p>
            <ul class="flex gap-8">
                <li v-for="social in SOCIALS" :key="social.platform">
                    <a :href="social.url" target="_blank" class="inline-block">
                        <component :is="social.icon"
                            class="h-12 w-12 fill-zinc-300 hover:fill-white transition-all duration-300 hover:scale-110" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>