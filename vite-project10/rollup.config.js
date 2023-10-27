import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: ["src/index.js"],
  output: [
    {
      dir: "dist/es",
      format: "esm",
      plugins: [terser()],
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      plugins: [terser()],
    },
  ],
  plugins: [resolve(), commonjs()],
  external: ["lodash"],
};
