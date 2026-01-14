import type { Activity } from "../interfaces/activity.interface";
import { EXPERIENCES } from "./experiences";
import { WORKS } from "./works";

export const RECENT_ACTIVITIES: Activity[] = [
    WORKS[WORKS.length - 1] as Activity,
    EXPERIENCES[EXPERIENCES.length - 1] as Activity,
]