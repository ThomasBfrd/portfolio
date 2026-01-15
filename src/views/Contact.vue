<script setup lang="ts">
import About from '@/shared/components/about.vue';
</script>

<template>
    <div>
        <section class="p-8 flex flex-col gap-4">
            <h2 class="text-2xl font-bold mb-4">A propos</h2>
            <div class="flex flex-col justify-start items-start gap-4 mb-4">
                <p>Je suis Thomas Bouffard, développeur web fullstack.</p>
                <p>Développeur web avec deux années d’expérience en alternance sur un SaaS de facturation et de
                    comptabilité chez EBP (groupe Cegid), j’ai travaillé sur des applications Angular / .NET en
                    production, aussi bien sur le développement de fonctionnalités que sur l’investigation et la
                    résolution d’incidents via le système de tickets.</p>

                <p>Lors de cette expérience, j’ai été amené à analyser et corriger des anomalies, intervenir sur des
                    microservices en .NET et des bases de données SQL, et déployer des hotfix ainsi que des scripts SQL
                    en production afin de résoudre des problématiques applicatives. J’ai également mis en place une
                    documentation technique structurée contenant des snippets SQL, afin de faciliter et fiabiliser la
                    création de scripts récurrents. J’accorde par ailleurs une importance particulière à la
                    compréhension métier ainsi qu'à la communication au sein de l’équipe.</p>

                <p>En parallèle, je développe un projet personnel fullstack en production (React / .NET), me permettant
                    de consolider mes compétences backend, notamment en conception orientée DDD, et de maintenir une
                    pratique régulière du développement applicatif.</p>
                <p>En dehors du développement, je suis passionné par la musique électronique et le sound-design, et je compose de la musique à mes heures perdues.</p>
            </div>
        </section>
        <section class="p-8 flex flex-col gap-4">
            <About :is-centered="false" />
        </section>
    </div>
</template>