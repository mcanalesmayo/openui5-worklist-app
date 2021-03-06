// Karma configuration
// Generated on Wed Jun 13 2018 14:38:44 GMT+0200 (CEST)

module.exports = function(config) {
	require("./karma.conf")(config);
	config.set({

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'{,!(test)}/*.js': ['coverage']
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: 'html',
					dir: '../coverage/'
				},
				{
					type: 'text'
				}
			],
			check: {
				global: {
					statements: 90,
					branches: 80,
					functions: 90,
					lines: 90
				}
			}
		},

		client: {
			qunit: {
				showUI: false
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['ChromeHeadless'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true

	});
};
