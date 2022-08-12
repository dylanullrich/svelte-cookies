const netlify = require('@sveltejs/adapter-netlify');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify()
	}
};

export default config;
