import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as fs from "fs";

const esbuildPatchPlugin = {
  name: "react-virtualized-patch",
  setup(build) {
    build.onLoad(
      {
        filter:
          /react-virtualized\/dist\/es\/WindowScroller\/utils\/onScroll.js$/,
      },
      async (args) => {
        const text = await fs.promises.readFile(args.path, "utf8");

        return {
          contents: text.replace(
            'import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";',
            ""
          ),
        };
      }
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["object-assign", "@loadable/component > hoist-non-react-statics"],
    exclude: ["@loadable/component"],
    esbuildOptions: {
      plugins: [esbuildPatchPlugin],
    },
  },
});
