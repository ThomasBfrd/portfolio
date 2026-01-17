import type { Activity } from "../interfaces/activity.interface";

export const WORKS: Activity[] = [
        {
        title: "Portfolio - Vue 3 + TypeScript",
        image: "/portfolio-logo.jpg",
        screen: "",
        company: "Portfolio",
        website: "https://www.thomasbfrd.vercel.com",
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
        ],
        toDo: []
    },
    {
        title: "Viberz - React / .NET",
        image: "/viberz-logo.png",
        screen: "/viberz-screen.png",
        company: "Viberz",
        website: "https://www.viberz.app",
        period: "Août 2025 - Janv 2026",
        tools: [
            "React",
            "Typescript",
            ".NET 9",
            "C#",
            "PostgreSQL",
            "Git",
            "Postman"
        ],
        description: [
            "Implémentation d’une authentification OAuth2 avec Spotify et de fonctionnalités de jeu (blind test, scoring, grades) et sociales (découverte et partage de playlists proposées par les utilisateurs).",
            "Backend en .NET 9 avec API RESTful, gestion des utilisateurs, parties, scores et playlists en PostgreSQL via Entity Framework (architecture en DDD).",
            "Création d'une interface utilisateur simple en React Typescript, et récupération des données avec Tanstack Query.",
            "Déploiement de l'application sur Vercel (frontend), Render (backend), et Neon (base de données)."
        ],
        toDo: [
            "Implémenter un système multiprovider pour l'authentification (Spotify / Deezer / Apple Music) et pouvoir diffuser les musiques/playlists selon la plateforme choisie par l'utilisateur.",
            "Implémenter un système de limitation de parties gratuites par jour etmettre en place un système d'abonnement payant via Stripe pour débloquer des fonctionnalités supplémentaires.",
            "Implémenter une nouvelle catégorie -> 'Learning' pour apprendre de manière interactive et ludique la structure des différents sous-genres dans la musique électronique.",
            "Découper les sous-genres en différents autres sous-genres (exemple: Dubstep -> Riddim, Brostep, Chillstep, etc)"
        ]
    }
]