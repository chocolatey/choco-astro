import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import rehypeMermaid from 'rehype-mermaid';
import remarkCustomHeaderId from 'remark-custom-header-id';
import { mermaidConfig } from 'src/util/mermaid-config'; // change to 'choco-astro/src/util/mermaid-config' if using choco-astro on a repository

export default defineConfig({
    // site: 'https://docs.chocolatey.org', // Uncomment this with the domain you want to deploy to
    vite: {
        optimizeDeps: {
            exclude: ['fsevents']
        }
    },
    server: {
        port: 4321, // Update this port to what is assigned by choco-theme - https://github.com/chocolatey/choco-theme/blob/main/build/data/preview-config.ts
        host: true
    },
    markdown: {
        syntaxHighlight: false, // Temporarily disable syntax highlighting and rely on Prism.js via choco-theme
        remarkPlugins: [
            remarkCustomHeaderId,
        ],
        rehypePlugins: [
            [rehypeMermaid, {
                mermaidConfig: mermaidConfig
            }]
        ]
    },
    prefetch: {
        prefetchAll: true
    },
    integrations: [sitemap(), mdx()]
});
