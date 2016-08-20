module.exports =function(grunt) {
	grunt.initConfig({
		less: {
			dev: {
				files: {
					'styles.css':'assets/styles/app.less'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
};
