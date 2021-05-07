const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	// HACK we use this custom webpack configuration to
	// replace the global css modules with a no-op. This
	// is required because nextjs does not support loading
	// global css modules from a package. This can only
	// be done from the main _app.js file.
	webpack: (config, { webpack }) => {
		config.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/shared\/index.ts/,
				"shared/index_next.ts"
			)
		);
		return config;
	},

	// list of valid nextjs page extensions, extended
	// to support markdown and mdx files.
	pageExtensions: ["js", "jsx", "md", "mdx"],

	// HACK because we do not currently have an intro
	// page at the root path, so we automatically re-direct
	// the root path to an existing page. This can be removed
	// once we have a homepage at the root path.
	async redirects() {
		return [
			{
				source: "/",
				destination: "/avatar",
				permanent: false,
			},
		];
	},
});
