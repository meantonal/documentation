// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "Meantonal",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/meantonal/meantonal",
        },
      ],
      sidebar: [
        {
          label: "Quick Start",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "What is Meantonal?", slug: "quickstart/start" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Learn",
          autogenerate: { directory: "learn" },
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
      },
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "http://meantonal.org",
  output: "static",
});
