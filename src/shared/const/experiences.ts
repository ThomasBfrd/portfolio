import type { Activity } from "../interfaces/activity.interface";

export const EXPERIENCES: Activity[] = [
    {
        title: "Hubbix - Angular/.NET",
        image: "/cegid-logo.png",
        screen: "/hubbix-screen.png",
        company: "Hubbix",
        period: "Oct 2023 - Oct 2025",
        tools: [
            "Angular",
            "Typescript",
            "Jasmine",
            ".NET 8",
            "C#",
            "Entity Framework",
            "Azure DevOps",
            "Git",
        ],
        description: [
            "Migration et refonte de l'espace connecté Hubbix et la console commerciale en Angular (migration 15→17) en créant des composants réutilisables et services, contribuant à la maintenabilité et à l'uniformité de l'interface.",
            "Développement et intégration d’API REST .NET (endpoints, DTO, contrôleurs) pour les fonctionnalités abonnements et gestion utilisateurs.",
            "Diagnostics et correction d’anomalies en SQL (MariaDB) et investigations sur la cohérence des données pour limiter les incidents applicatifs.",
            "Mise en place des tests unitaires (Jasmine), documentation technique pour les livrables et application du Gitflow avec Azure DevOps dans un cadre agile."
        ]
    },
]