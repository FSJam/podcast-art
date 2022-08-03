import chalk from 'chalk';
import {startParse} from './csv-parser';

console.log('==================================================');
console.log('||                                              ||');
console.log(
	`||           ${chalk.hex('#F4AF00')('FSJam')} ${chalk.hex('#EF8D27')(
		'Cover Art'
	)} ${chalk.hex('#E56066')('Generator')}          ||`
);
console.log('||                                              ||');
console.log(`||           Made by Christopher Burns          ||`);
console.log(
	`||            ${chalk.hex('#1DA1F2')(
		'Twitter: @BurnedChris'
	)}             ||`
);
console.log('||                                              ||');
console.log('==================================================');

startParse();
