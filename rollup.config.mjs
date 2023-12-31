// import nodeResolve from "@rollup/plugin-node-resolve";
// import replace from "@rollup/plugin-replace";
// import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
// import url from "@rollup/plugin-url";
// import svgr from "@svgr/rollup";
// import css from "rollup-plugin-import-css";
// import postcss from "rollup-plugin-postcss";
// import autoprefixer from "autoprefixer";
// import tailwindcss from "tailwindcss";

// const tailwindConfig = require("./tailwind.config.js");

// const pkg = require("./package.json");

// const env = process.env.NODE_ENV;

const extensions = [".js", ".ts", ".tsx", ".json"];

// const config = {
// 	input: "src/index.js",
// 	external: Object.keys(pkg.peerDependencies || {}).concat("react-dom"),
// 	output: {
// 		format: "es",
// 		file: pkg.main,
// 		sourcemap: true,
// 		inlineDynamicImports: true,
// 		globals: {
// 			React: "React", // Specify the global variable name for React
// 		},
// 	},
// 	plugins: [
// 		nodeResolve({
// 			extensions,
// 		}),
// 		babel({
// 			include: "src/**/*",
// 			exclude: "**/node_modules/**",
// 			babelHelpers: "runtime",
// 			extensions,
// 		}),
// 		dynamicImportVars({
// 			include: ["*.js"],
// 		}),

// 		// css(),
// 		postcss({
// 			config: {
// 				path: "./postcss.config.js",
// 			},
// 			minimize: true,
// 			inject: {
// 				insertAt: "top",
// 			},
// 			extensions: [".css", ".module.css"],
// 			plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
// 		}),
// 		replace({
// 			"process.env.NODE_ENV": JSON.stringify(env),
// 			preventAssignment: true,
// 		}),
// 		commonjs(),
// 		url(),
// 		svgr({ icon: true }),
// 	],
// };

// if (env === "production") {
// 	config.plugins.push(
// 		terser({
// 			compress: {
// 				pure_getters: true,
// 				unsafe: true,
// 				unsafe_comps: true,
// 				warnings: false,
// 			},
// 		})
// 	);
// }

// export default config;

import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { defineRollupSwcOption, swc } from "rollup-plugin-swc3";
import { visualizer } from "rollup-plugin-visualizer";
import swcPreserveDirectives from "rollup-swc-preserve-directives";

import autoprefixer from "autoprefixer";
// To handle css files
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

import image from "@rollup/plugin-image";
import tailwindConfig from "./tailwind.config.mjs";

import packageJson from "./package.json" assert { type: "json" };
// const __prod__ = process.env.NODE_ENV === 'production';

export default [
  {
    input: "./src/index.js",
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        // inlineDynamicImports: true,
        exports: "named",
        entryFileNames: "[name].cjs",
        chunkFileNames: "[name]-[hash].cjs",
        globals: {
          react: "React" // Specify the global variable name for React
        }
      },
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
        // inlineDynamicImports: true,
        // dynamicImport: true,
        exports: "named",
        entryFileNames: "[name].mjs",
        chunkFileNames: "[name]-[hash].mjs",
        globals: {
          react: "React" // Specify the global variable name for React
        }
      },
      // webpack 4 support
      {
        dir: "dist/legacy-esm",
        format: "esm",
        sourcemap: true,
        // inlineDynamicImports: true,
        // dynamicImport: true,
        exports: "named",
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        globals: {
          react: "React" // Specify the global variable name for React
        }
      }
    ],
    external: Object.keys(packageJson.peerDependencies || {}),
    plugins: [
      replace({
        preventAssignment: true
      }),
      nodeResolve({
        extensions
      }),
      commonjs({
        exclude: "src/**"
      }),
      nodePolyfills(),
      swc(
        defineRollupSwcOption({
          // All options are optional
          include: /\.[jt]sx?$/, // default
          exclude: /node_modules/, // default
          // tsconfig: "tsconfig.json", // default
          // And add your swc configuration here!
          minify: true,
          sourceMaps: true,
          inlineSourcesContent: true,
          jsc: {
            parser: {
              syntax: "ecmascript",
              jsx: true,
              dynamicImport: true,
              privateMethod: false,
              functionBind: false,
              exportDefaultFrom: false,
              exportNamespaceFrom: false,
              decorators: false,
              decoratorsBeforeExport: false,
              topLevelAwait: false,
              importMeta: false
            },
            transform: {
              react: {
                development: false
              }
            },
            target: "es5",
            loose: false,
            externalHelpers: false,
            // Requires v1.2.50 or upper and requires target to be es2016 or upper.
            keepClassNames: true
          }
        })
      ),
      swcPreserveDirectives(),
      dynamicImportVars({
        include: ["*.js"]
      }),
      // typescript({ tsconfig: "./tsconfig.json" }),
      // postcss(),
      postcss({
        config: {
          path: "./postcss.config.mjs"
        },
        // extract: true,
        minimize: true,
        inject: {
          insertAt: "top"
        },
        extensions: [".css", ".module.css"],
        plugins: [autoprefixer(), tailwindcss(tailwindConfig)]
      }),

      // terser(),
      image()
      // visualizer()
    ]
  }
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],

  //   external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  // },
];
