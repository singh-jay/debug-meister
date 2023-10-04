import fs from "fs";
import { defineConfig } from "tsup";

// export default defineConfig({
//   entry: ['src/index.js'],
//
//   dts: false,
//   format: ['esm', 'cjs'],
//   injectStyle: true,
//   loader: { '.svg': 'file', '.js': 'jsx' },
//   esbuildOptions(options) {
//     options.banner = {
//       js: '"use client"',
//     };
//   },
//   plugins: [require('tailwindcss')(), require('autoprefixer')()],
// });

const onResolvePlugin = {
  name: "ResolvePlugin",
  setup(build) {
    // Redirect all paths starting with "images/" to "./public/images/"
    // build.onResolve({ filter: /^images\// }, (args) => {
    //   return { path: path.join(args.resolveDir, "public", args.path) };
    // });

    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({ filter: /^json-formatter-js\// }, (args) => {
      return { path: args.path, external: false };
    });
  }
};

export default defineConfig((options) => {
  const commonOptions = {
    ...options,
    entry: {
      "debug-meinster": "src/index.js"
    },
    splitting: true,
    clean: true,
    minify: false,
    target: "es2018",
    external: ["react", "react-dom"],
    sourcemap: true,
    dts: false,
    injectStyle: true,
    loader: { ".svg": "dataurl", ".js": "jsx" },
    // esbuildOptions(options) {
    //   options.banner = {
    //     js: '"use client"',
    //   };
    // },
    plugins: [onResolvePlugin]
  };

  return [
    {
      ...commonOptions,
      format: "esm",
      outDir: "./dist/esm/",
      outExtension: () => ({ js: ".mjs" }),
      // outExtension({ format }) {
      //   return {
      //     js: `.${format}.mjs`,
      //   };
      // },
      clean: true
      // onSuccess() {
      //   // Support Webpack 4 by pointing `"module"` to a file with a `.js` extension
      //   fs.copyFileSync(
      //     'dist/debug-meinster.mjs',
      //     'dist/debug-meinster.legacy-esm.js',
      //   );
      // },
    },
    {
      ...commonOptions,
      format: "cjs",
      outDir: "./dist/cjs/",
      outExtension: () => ({ js: ".cjs" })
      // outExtension({ format }) {
      //   return {
      //     js: `.${format}.cjs`,
      //   };
      // },
    }
  ];
});
