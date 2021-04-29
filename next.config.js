const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	webpack: (config, { webpack }) => {
		config.plugins.push(
		  new webpack.NormalModuleReplacementPlugin(
			/shared\/index.ts/,
			"shared/index_next.ts"
		  )
		);
		return config
	},
	pageExtensions: ["js", "jsx", "md", "mdx"],
	async redirects() {
		return [
		  {
			source: '/',
			destination: '/avatar',
			permanent: false,
		  },
		]
	  },
});


