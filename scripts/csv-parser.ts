import {parse} from 'csv-parse';
import fs from 'fs';
import async from 'async';
import {startRender} from './remotion';
import path from 'path';
import chalk from 'chalk';
import e from 'express';

const csvParser = parse({delimiter: ','}, (err, data) => {
	async.eachSeries(
		data,
		(line: [number | 'episode-id', string, string], callback) => {
			// If csv header skip
			if (line[0] === 'episode-id') {
				return callback();
			}
			// Go to art folder create const of podcast art path
			const imagePath = `${path.resolve(__dirname, '..')}/art/episode-${
				line[0]
			}.png`;

			// If podcast art exist skip
			if (fs.existsSync(imagePath)) {
				console.log(
					`[${chalk.hex('#F4AF00')('skipped')}]: skipped episode ${line[0]}`
				);
				return callback();
			}

			const props = {episode: line[0], description: line[1], avatar: line[2]};

			startRender(props).then(() => {
				callback();
			});
		}
	);
});

export const startParse = async () => {
	// Check for episodes.csv
	const episodes = `${path.resolve(__dirname, '..')}/episodes.csv`;

	if (fs.existsSync(episodes)) {
		await fs.createReadStream(episodes).pipe(csvParser);
	} else {
		console.log(
			`[${chalk.red('error')}]: No ${chalk.blue('episodes.csv')} found`
		);
		console.log(
			`[${chalk.red('error')}]: Please copy ${chalk.blue(
				'episodes.demo.csv'
			)} to ${chalk.blue('episodes.csv')}`
		);
	}
};
