import type { Profile } from "../interfaces/profile.interface";

export const PROFILE: Profile = {
  name: "Thomas Bouffard",
  email: "thomas.bfrd@gmail.com",
  skills: [
    {
      name : "Angular",
      background: "hover:bg-gradient-to-r hover:from-[#e60f00]/75 hover:to-[#ff745c]/75"
    },
    {
      name : "React",
      background: "hover:bg-gradient-to-r hover:from-blue-600/75 to-indigo-800/75"
    },
    {
      name : "Vue",
      background: "hover:bg-gradient-to-r hover:from-emerald-400/75 hover:to-teal-600/75"
    },
    {
      name : "Typescript",
      background: "hover:bg-gradient-to-r hover:from-[#0a70f5]/75 hover:to-[#adcdff]/75"
    },
    {
      name : "Javascript",
      background: "hover:bg-gradient-to-r hover:from-[#f5c20a]/75 hover:to-[#d7873c]/75"
    },
    {
      name : ".NET",
      background: "hover:bg-gradient-to-r hover:from-[#9417e8]/75 hover:to-[#560d7d]/75"
    }
  ]
};