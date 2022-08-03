import fs from 'fs';
import {startRender} from './remotion';
import path from 'path';
import chalk from 'chalk';
import pLimit from 'p-limit';

// Example Concurrency of 3 promise at once
const limit = pLimit(5);

const jsonParser = async (
	data: {
		episodeId: number;
		title: string;
		avatar?: string | undefined;
		avatar2?: string | undefined;
	}[]
) =>
	Promise.all(
		data.map(
			async ({
				episodeId,
				title,
				avatar,
				avatar2,
			}: {
				episodeId: number;
				title: string;
				avatar?: string;
				avatar2?: string;
			}) => {
				// Go to art folder create const of podcast art path
				const imagePath = `${path.resolve(
					__dirname,
					'..'
				)}/art/episode-${episodeId}.png`;

				// If podcast art exist skip
				if (fs.existsSync(imagePath)) {
					// Console.log(
					// 	`[${chalk.hex('#F4AF00')('skipped')}]: skipped episode ${episodeId}`
					// );
					return 'skipped';
				}

				const props = {
					episode: episodeId,
					description: title,
					avatar,
					avatar2,
				};
				try {
					await limit(() => startRender(props));
					return 'rendered';
				} catch (err) {
					console.log(`[${chalk.red('error')}]: Skipped episode ${episodeId}`);
					console.log(`[${chalk.red('error')}]:`, err);
					return 'error';
				}
			}
		)
	);

export const startParse = async () => {
	// Check for episodes.csv
	const episodes = `${path.resolve(__dirname, '..')}/episodes.json`;
	try {
		if (fs.existsSync(episodes)) {
			const data = await fs.readFileSync(episodes);
			const parsedData = JSON.parse(data);
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
