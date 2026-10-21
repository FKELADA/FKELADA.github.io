import projects from "./data/projects.json";
import { t, type Lang } from "./i18n";

export type Project = (typeof projects)[number];

/** Display order of the categories: personal projects always come last. */
const ORDER = ["research", "community", "personal"] as const;
const rank = (p: Project) => {
  const i = ORDER.indexOf(p.category as (typeof ORDER)[number]);
  return i === -1 ? ORDER.length - 1 : i;
};

/** All projects, research first and personal last (stable within a category). */
export const sortedProjects = [...projects].sort((a, b) => rank(a) - rank(b));

/** The projects grouped by category, in display order, with the heading for each group. */
export function projectGroups(lang: Lang) {
  return ORDER.map((c) => ({ title: t[lang].categories[c], projects: sortedProjects.filter((p) => (p.category ?? "personal") === c) })).filter(
    (g) => g.projects.length > 0
  );
}
