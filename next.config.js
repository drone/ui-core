const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
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
