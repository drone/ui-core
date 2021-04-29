import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import autoprefixer from "autoprefixer";
import nested from "postcss-nested";
import postcss from "postcss";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

const extensions = [".js", ".jsx", ".ts", ".tsx"];


export default {
	input: "src/index.ts",
	output: [
		{
			file: pkg.main,
			format: "cjs",
		},
		{
			file: pkg.module,
			format: "es",
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
    // This is to resolve "./abc" as "./abc/index.js", just like commonjs.
    resolve({
        extensions,
    }),
		typescript({
			useTsconfigDeclarationDir: true,
			// exclude: ["node_modules", "pages", "public", "out", "dist", "docs" ]
		}),
		postcss({
			extensions: [ '.css', '.module.css' ],
			modules: true,
			inject: true,
			extract: false,
			plugins: [
				nested(),
				autoprefixer(),
			]
		}),
		    // Babel is only used to parse typescript and JSX. We aren't using typescript compiler as it has larger output.
			babel({
				extensions,
				exclude: "node_modules/**",
			}),
	],
};
