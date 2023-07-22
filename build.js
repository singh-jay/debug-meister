// import * as esbuild from "esbuild";

// await esbuild
// 	.build({
// 		entryPoints: ["src/index.js"],
// 		bundle: true,
// 		minify: false,
// 		sourcemap: true,
// 		// target: ["chrome58", "firefox57", "safari11", "edge16"],
// 		loader: { ".svg": "text", ".js": "jsx" },
// 		outfile: "build/out.js",
// 	})
// 	.then((res) => {
// 		console.log("build success", res);
// 	})
// 	.catch((error) => {
// 		console.error("build error", error);
// 	});

// const esbuild = require("esbuild");

// esbuild
// 	.build({
// 		entryPoints: ["src/index.js"],
// 		outdir: "dist",
// 		bundle: true,
// 		sourcemap: true,
// 		minify: false,
// 		splitting: true,
// 		format: "esm",
// 		target: ["chrome80"],
// 		loader: { ".svg": "text", ".js": "jsx" },
// 	})
// 	.catch((error) => {
// 		console.error("build error", error);
// 		process.exit(1);
// 	});
console.log(process.env.NODE_ENV)
const cssLoaderPlugin = {
  name: "CSS Loader",
  setup: (build) =>
    build.onLoad({ filter: /\.css$/ }, async ({ path: cssFilePath }) => {
      console.log("cssFilePath")
      // const cssText = await fs.readFile(cssFilePath, "utf8")
      // const minifiedCss = minifyCss(cssText)
      //   .replaceAll("`", "\\`")
      //   .replaceAll("\\", "\\\\") // escape back ticks and slashes for literal template
      // const cssId = md5(cssFilePath) // generate style tag id from file path so that it will be consistent
      // const contents = `if(!document.getElementById('${cssId}')){const s=document.createElement("style");s.id='${cssId}';s.textContent=\`${minifiedCss}\`;document.head.append(s)}`
      const contents = `let link = document.createElement('link'); link.rel = 'stylesheet';link.href = '${cssFilePath}';document.head.appendChild(link)`
      return { contents, loader: "js" }
    }),
}
const __prod__ = process.env.NODE_ENV === "production"
import { build } from "esbuild"
import { sassPlugin } from "esbuild-sass-plugin"
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import tailwindConfig from "./tailwind.config"
import pkg from "./package.json"
const entryFile = "src/index.js"
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  // external: Object.keys(pkg.peerDependencies),
  logLevel: "info",
  minify: false,
  sourcemap: true,
  loader: { ".svg": "file", ".js": "jsx" },
  jsxDev: !__prod__,
  jsx: "automatic",
  jsxFragment: "Fragment",
  metafile: true,
  plugins: [
    sassPlugin({
      async transform(source, resolveDir) {
        const { css } = await postcss([
          tailwindcss(tailwindConfig),
          autoprefixer,
        ]).process(source, {
          from: undefined,
        })
        return css
      },
    }),
    cssLoaderPlugin,
  ],
}

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.mjs",
  target: ["esnext", "node16"],
})

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs",
  target: ["esnext", "node16"],
})
