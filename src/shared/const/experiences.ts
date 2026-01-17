import type { Activity } from "../interfaces/activity.interface";

export const EXPERIENCES: Activity[] = [
    {
        title: "Hubbix - Angular / .NET",
        image: "/cegid-logo.png",
        screen: "/hubbix-screen.png",
        company: "EBP, A Cegid Company",
        website: "https://www.ebp.com/ebp-hubbix-logiciel-facturation-compta",
        period: "Oct 2023 - Oct 2025",
        tools: [
            "Angular",
            "Typescript",
            "Jasmine",
            ".NET 8",
            "C#",
            "Azure DevOps",
            "Git",
        ],
        description: [
            "Développement en Angular pour l'espace client, la boutique et la console commerciale Hubbix",
            "Migration et refonte de l'espace connecté Hubbix et la console commerciale en Angular (migration 15→17) en créant des composants réutilisables et services, contribuant à la maintenabilité et à l'uniformité de l'interface.",
            "Développement et intégration d’API REST .NET (endpoints, DTO, contrôleurs) pour les fonctionnalités abonnements et gestion utilisateurs.",
            "Diagnostics et résolution de tickets client en SQL (MariaDB) et C# pour assurer la stabilité et la performance de l'application.",
            "Mise en place de tests unitaires (Jasmine), rédaction de documentation technique pour les livrables. Mise en pratique du GitFlow. Déploiements sur Azure DevOps en environnement de recette et production.",
        ],
        toDo: []
    },
]