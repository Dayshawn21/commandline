#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk')

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
	if (err) {
		console.log(err);
	}
	const statPromies = filenames.map ( filename => {
		return lstat(filename)
	});

	 const allStats = await Promise.all(statPromies);

	 for (let stats of allStats) {
		 const index = allStats.indexOf(stats)


			if (stats.isFile()) {
				console.log(chalk.red(filenames[index]))
			}else{
				console.log(chalk.blue(filenames[index]))
			}


	 }
});
