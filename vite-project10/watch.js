const rollup = require("rollup");

const watcher = rollup.watch({
  input: "./src/index.js",
  output: [
    {
      dir: "dist/es",
      format: "esm",
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  external: ["lodash"],
  watch: {
    exclude: ["node_modules/**"],
    include: ["src/**"],
  },
});

watcher.on("restart", () => {
  console.log("restart");
});

watcher.on("change", (id) => {
  console.log("change id: ", id);
});

watcher.on("event", (e) => {
  if (e.code === "BUNDLE_END") {
    console.log("bundle information: ", e);
  }
});
