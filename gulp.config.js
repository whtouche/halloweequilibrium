module.exports = function () {
	var client = './src/';
	var clientApp = client + 'app/';
	var root = './';
	var temp = './.tmp/';

	var config = {

		//All the js to vet
		alljs: [
			'./src/**/*.js',
			'./*.js'
		],
		client: client,
		css: temp + 'styles.css',
		html: clientApp + '**/*.html',
		index: 'index.html',

		js: [
			clientApp + '**/*.module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*.spec.js'
		],

		less: client + 'styles/styles.less',
		root: root,
		temp: temp,

		//BrowserSync
		browserReloadDelay: 1000,

		//Bower Settings
		bower: {
			json: require('./bower.json'),
			directory: './bower_components/',
			ignorePath: '../..'
		},

		packages: [
			'./package.json',
			'./bower.json'
		],
	};

	config.getWiredepDefaultOptions = function () {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath
		};
		return options;
	};

	return config;
};
