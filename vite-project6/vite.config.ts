import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import postcssConfig from "./postcss.config.js";
import svgr from "vite-plugin-svgr";
import viteImagemin from "vite-plugin-imagemin";

const variablePath = normalizePath(path.resolve("./src/variable.scss"));
const isProduction = process.env.NODE_ENV === "production";
const CDN_URL = "http://localhost:5173/";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : "/",
  resolve: {
    alias: {
      "@assets": path.join(__dirname, "src/assets"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components", "@emotion/babel-plugin"],
      },
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
    viteImagemin({
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.8, 0.9],
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
  css: {
    postcss: postcssConfig,
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
