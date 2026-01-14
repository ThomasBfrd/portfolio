<script setup lang="ts">
import Activity from '@/shared/components/activity.vue';
import { EXPERIENCES } from '@/shared/const/experiences';
</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-6">EXPERIENCES</h2>
        <Activity :activities="EXPERIENCES" />
    </div>
</template>