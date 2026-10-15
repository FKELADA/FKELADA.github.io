// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// English lives at the root (/, /cv/, /blog/…), French under /fr/.
export default defineConfig({
  site: "https://fkelada.github.io",
  trailingSlash: "always",
  integrations: [sitemap({ i18n: { defaultLocale: "en", locales: { en: "en", fr: "fr" } } })],
});
