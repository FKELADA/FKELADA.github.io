export type Lang = "en" | "fr";

export const t = {
  en: {
    home: "Home",
    projects: "Projects",
    cv: "CV",
    blog: "Blog",
    otherLang: "Français",
    tagline: "Power systems, open tools and personal projects",
    about: "About",
    featured: "Projects",
    allProjects: "All projects",
    latestPosts: "Latest posts",
    allPosts: "All posts",
    noPosts: "No posts yet. They're on their way.",
    readMore: "Read",
    code: "Code",
    live: "Open",
    docs: "Documentation",
    private: "Private app",
    experience: "Experience",
    education: "Education",
    publications: "Publications",
    journal: "Journal articles",
    conference: "Conference papers",
    achievements: "Achievements",
    skills: "Skills",
    languages: "Languages",
    figures: "My thesis in a few figures",
    print: "Print / save as PDF",
    present: "present",
    projectsIntro: "Tools for power-system research and teaching, and apps I build for daily life and my church community.",
    blogIntro: "Notes on power systems, research and the things I build.",
    alsoIn: "Also in French",
    published: "Published",
    backToBlog: "All posts",
    notFound: "This page doesn't exist.",
    cvNote: "",
  },
  fr: {
    home: "Accueil",
    projects: "Projets",
    cv: "CV",
    blog: "Blog",
    otherLang: "English",
    tagline: "Réseaux électriques, outils libres et projets personnels",
    about: "À propos",
    featured: "Projets",
    allProjects: "Tous les projets",
    latestPosts: "Derniers articles",
    allPosts: "Tous les articles",
    noPosts: "Pas encore d'article. Ils arrivent.",
    readMore: "Lire",
    code: "Code",
    live: "Ouvrir",
    docs: "Documentation",
    private: "Application privée",
    experience: "Expérience",
    education: "Formation",
    publications: "Publications",
    journal: "Articles de revue",
    conference: "Articles de conférence",
    achievements: "Distinctions",
    skills: "Compétences",
    languages: "Langues",
    figures: "Ma thèse en quelques chiffres",
    print: "Imprimer / enregistrer en PDF",
    present: "aujourd'hui",
    projectsIntro: "Des outils pour la recherche et l'enseignement en réseaux électriques, et des applications pour le quotidien et ma communauté paroissiale.",
    blogIntro: "Notes sur les réseaux électriques, la recherche et ce que je construis.",
    alsoIn: "Aussi en anglais",
    published: "Publié le",
    backToBlog: "Tous les articles",
    notFound: "Cette page n'existe pas.",
    cvNote: "Le contenu du CV est en anglais.",
  },
} as const;

/** URL of a page in a language: path is the English path ("/cv/"). */
export function href(lang: Lang, path: string) {
  return lang === "en" ? path : `/fr${path}`;
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

/** "2021-03" -> "Mar 2021" / "mars 2021"; "present" -> translated. */
export function formatMonth(value: string | number, lang: Lang) {
  const s = String(value);
  if (s === "present") return t[lang].present;
  const [y, m] = s.split("-").map(Number);
  if (!m) return String(y);
  return new Date(y, m - 1, 1).toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", { month: "short", year: "numeric" });
}
