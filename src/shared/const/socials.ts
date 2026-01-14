import type { Social } from "../interfaces/social.interface";
import GithubIcon from "../../assets/svg/github-icon.svg?component";
import LinkedinIcon from "../../assets/svg/linkedin-icon.svg?component";


export const SOCIALS: Social[] = [
    {
        platform: "GitHub",
        url: "https://github.com/ThomasBfrd?tab=repositories",
        icon: GithubIcon
    },
    {
        platform: "Linkedin",
        url: "https://www.linkedin.com/in/bouffardthomas/",
        icon: LinkedinIcon
    },
];