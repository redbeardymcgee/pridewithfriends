import contentCollections from "@content-collections/vite"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import rsc from "@vitejs/plugin-rsc"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import tsconfigPaths from "vite-tsconfig-paths"

const config = defineConfig({
  plugins: [
    contentCollections(),
    devtools(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      rsc: {
        enabled: true,
      },
    }),
    rsc(),
    viteReact(),
    nitro(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: { floatPrecision: 2 },
      },
    }),
  ],
})

export default config
