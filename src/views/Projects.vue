<script setup lang="ts">
import Activity from '@/shared/components/activity.vue';
import { WORKS } from '@/shared/const/works';
</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">PROJETS</h2>
        <Activity :activities="WORKS" />
    </div>
</template>