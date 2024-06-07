import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [autoprefixer, nested, tailwindcss]
};

export default config;
