module.exports = function(grunt) {

	require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					require: ['breakpoint'],
					cssDir: 'content/themes/pitaveri/css',
					sassDir: 'content/themes/pitaveri/sass',
					cacheDir: 'content/themes/pitaveri/.sass-cache',
					outputStyle: 'compressed',
					sourcemap: true,
					watch: true
				}
			}
		}

	});

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};

