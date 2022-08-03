import fs from 'fs';
import {startRender} from './remotion';
import path from 'path';
import chalk from 'chalk';
import pLimit from 'p-limit';
import {InputProps} from './types';

// Example Concurrency of 3 promise at once
const limit = pLimit(5);

const jsonParser = async (data: InputProps[]) =>
	Promise.all(
		data.map(async (inputProps: InputProps) => {
			// Go to art folder create const of podcast art path
			const imagePath = `${path.resolve(__dirname, '..')}/art/episode-${
				inputProps.episodeId
			}.png`;

			// If podcast art exist skip
			if (fs.existsSync(imagePath)) {
				return 'skipped';
			}

			try {
				await limit(() => startRender(inputProps));
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

export const startParse = async () => {
	// Check for episodes.csv
	const episodes = `${path.resolve(__dirname, '..')}/episodes.json`;
	try {
		if (fs.existsSync(episodes)) {
			const data = await fs.readFileSync(episodes);
			const parsedData = JSON.parse(data.toString());
			const returnedStatus = await jsonParser(parsedData);
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

			console.log(`[${chalk.green('remotion')}]: Completed`);
			console.log(`[${chalk.green('remotion')}]: Skipped ${skipped} renders`);
			console.log(`[${chalk.green('remotion')}]: Rendered ${rendered} covers`);
			console.log(`[${chalk.green('remotion')}]: Errored ${error} covers `);
		} else {
			console.log(
				`[${chalk.red('error')}]: No ${chalk.blue('episodes.json')} found`
			);
			console.log(
				`[${chalk.red('error')}]: Please copy ${chalk.blue(
					'episodes.demo.csv'
				)} to ${chalk.blue('episodes.csv')}`
			);
		}
	} catch (err) {
		console.log(`[${chalk.red('error')}]:`, err);
	}
};
