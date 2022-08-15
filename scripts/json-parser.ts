import fs from 'fs';
import {startRender} from './remotion';
import path from 'path';
import chalk from 'chalk';
import pLimit from 'p-limit';
import {InputProps, TypeProps} from './types';

// Example Concurrency of 3 promise at once
const limit = pLimit(5);

const episodeParser = async (data: InputProps[], typeProps: TypeProps) =>
	Promise.all(
		data.map(async (inputProps: InputProps) => {
			// Go to art folder create const of podcast art path
			const imagePath = `${path.resolve(__dirname, '..')}/dist/${
				typeProps.directory
			}/episode-${inputProps.episodeId}.png`;

			// If podcast art exist skip
			if (fs.existsSync(imagePath)) {
				return 'skipped';
			}

			try {
				await limit(() => startRender(inputProps, typeProps));
				return 'rendered';
			} catch (err) {
				console.log(
					`[${chalk.red('error')}]: Skipped episode ${inputProps.episodeId}`
				);
				console.log(`[${chalk.red('error')}]:`, err);
				return 'error';
			}
		})
	);

export const startParse = async (typeProps: TypeProps) => {
	// Check for episodes.csv
	const episodes = `${path.resolve(__dirname, '..')}/episodes.json`;
	try {
		if (fs.existsSync(episodes)) {
			const data = await fs.readFileSync(episodes);
			const parsedData = JSON.parse(data.toString());
			const returnedStatus = await episodeParser(parsedData, typeProps);
			// Work out statuses
			const skipped = Object.values(returnedStatus).filter(
				(element) => element === 'skipped'
			).length;
			const error = Object.values(returnedStatus).filter(
				(element) => element === 'error'
			).length;
			const rendered = Object.values(returnedStatus).filter(
				(element) => element === 'rendered'
			).length;

			console.log(
				`[${chalk.green('remotion')}]: ${typeProps.slug} list Completed`
			);
			console.log(
				`[${chalk.green('remotion')}]: Skipped ${skipped} ${
					typeProps.slug
				} images.`
			);
			console.log(
				`[${chalk.green('remotion')}]: Rendered ${rendered} ${
					typeProps.slug
				} images.`
			);
			console.log(
				`[${chalk.green('remotion')}]: Errored ${error} ${
					typeProps.slug
				} images.`
			);
		} else {
			console.log(
				`[${chalk.red('error')}]: No ${chalk.blue('episodes.json')} found`
			);
			console.log(
				`[${chalk.red('error')}]: Please copy ${chalk.blue(
					'episodes.demo.json'
				)} to ${chalk.blue('episodes.json')}`
			);
		}
	} catch (err) {
		console.log(`[${chalk.red('error')}]:`, err);
	}
};
