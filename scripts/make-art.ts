import {parse} from 'csv-parse';
import fs from 'fs';
import async from 'async';
import {startRender} from './remotion';

const parser = parse({delimiter: ','}, (err, data) => {
	async.eachSeries(data, (line, callback) => {
		// If header-file
		if (line[0] === 'episode-id') {
			return callback();
		}
		const props = {episode: line[0], description: line[1], avatar: line[2]};

		console.log(props);
		startRender(props).then(() => {
			callback();
		});
	});
});

fs.createReadStream('./episodes.csv').pipe(parser);
