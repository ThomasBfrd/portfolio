import type { Activity } from "../interfaces/activity.interface";

export const WORKS: Activity[] = [
        {
        title: "Portfolio - Vue 3 + TypeScript",
        image: "/portfolio-logo.jpg",
        screen: "",
        company: "Portfolio",
        period: "Janv 2026 - Janv 2026",
        tools: [
            "Vue 3",
            "Typescript",
            "TailwindCSS"
        ],
        description: [
            "Création d'un portfolio pour présenter mes différents projets et expériences professionnelles.",
            "Utilisation de Vue 3 avec TypeScript",
            "Utilisation de TailwindCSS pour le design et la mise en page.",
            "Création de composants réutilisables pour les activités et le menu de navigation."
        ]
    },
    {
        title: "Viberz - React / .NET",
        image: "/viberz-logo.png",
        screen: "/viberz-screen.png",
        company: "Viberz",
        period: "Août 2025 - Janv 2026",
        tools: [
            "React",
            "Typescript",
            ".NET 9",
            "C#",
            "Entity Framework",
            "PostgreSQL",
            "Git",
            "Postman"
        ],
        description: [
            "Implémentation d’une authentification OAuth2 avec Spotify et de fonctionnalités de jeu (blind test, scoring, grades) et sociales (découverte et partage de playlists proposées par les utilisateurs).",
            "Conception du backend en architecture DDD et CQRS avec mise en cache Redis, permettant une architecture propre.",
            "Développement de composants et services complets (front + backend + DB + cache), garantissant la livraison de parcours utilisateurs et la persistance des données"
        ]
    }
]