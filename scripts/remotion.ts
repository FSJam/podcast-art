import path from 'path';
import {bundle} from '@remotion/bundler';
import {getCompositions, renderStill} from '@remotion/renderer';
import chalk from 'chalk';
import {InputProps} from './types';

export const startRender = async (inputProps: InputProps) => {
	console.log(
		`[${chalk.green('remotion')}]: started rendering episode ${
			inputProps.episodeId
		}`
	);

	// The composition you want to render
	const compositionId = 'PodcastArt';
	// You only have to do this once, you can reuse the bundle.
	const entry = './src/index';
	const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
		// If you have a Webpack override, make sure to add it here
		webpackOverride: (config) => config,
	});
	// Parametrize the video by passing arbitrary props to your component.

	// Extract all the compositions you have defined in your project
	// from the webpack bundle.
	const comps = await getCompositions(bundleLocation, {
		// You can pass custom input props that you can retrieve using getInputProps()
		// in the composition list. Use this if you want to dynamically set the duration or
		// dimensions of the video.
		inputProps,
	});
	// Select the composition you want to render.
	const composition = comps.find((c) => c.id === compositionId);
	// Ensure the composition exists
	if (!composition) {
		throw new Error(`No composition with the ID ${compositionId} found.
  Review "${entry}" for the correct ID.`);
	}

	const outputLocation = `${path.resolve(__dirname, '..')}/art/episode-${
		inputProps.episodeId
	}.png`;

	await renderStill({
		composition,
		serveUrl: bundleLocation,
		output: outputLocation,
		inputProps,
	});

	console.log(
		`[${chalk.green('remotion')}]: completed rendering episode ${
			inputProps.episodeId
		}`
	);

	return true;
};
