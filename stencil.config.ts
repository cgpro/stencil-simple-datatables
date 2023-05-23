import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

let currDate = new Date();

export const config: Config = {
	devServer: { openBrowser: false },
	namespace: 'Bundle',
	srcDir: 'src',
	outputTargets: [
		{
			type: 'dist',
			empty: true,
			dir: 'public',
			esmLoaderPath: '../loader',
		},
		{
			type: 'docs-readme',
			strict: true,
		},
	],
	preamble: `Timestamp: ${currDate.getTime()}\nBuild-Time: ${currDate}`,
	plugins: [sass()],
	sourceMap: process.env.NODE_ENV !== 'production',
};
