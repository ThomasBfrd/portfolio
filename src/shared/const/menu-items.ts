import type { MenuItem } from "../interfaces/menu-item.interface";
import HomeIcon from "../../assets/svg/home-icon.svg?component";
import WorkIcon from "../../assets/svg/work-icon.svg?component";
import ProjectIcon from "../../assets/svg/projects-icon.svg?component";
import AboutIcon from "../../assets/svg/about-icon.svg?component";

export const MENU_ITEMS: MenuItem[] = [
    {
        label: "Accueil",
        icon: HomeIcon,
        route: "/"
    },
    {
        label: "Experiences",
        icon: WorkIcon,
        route: "/experiences"
    },
    {
        label: "Projets",
        icon: ProjectIcon,
        route: "/projects"
    },
    {
        label: "Contact",
        icon: AboutIcon,
        route: "/about"
    }
];