import {parse} from 'csv-parse';
import fs from 'fs';
import async from 'async';
import {startRender} from './remotion';
import path from 'path';
import chalk from 'chalk';

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
	await fs.createReadStream('./episodes.csv').pipe(csvParser);
};
