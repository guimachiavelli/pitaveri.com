module.exports = function(grunt) {

    'use strict';

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
                    sourcemap: false,
                    watch: true
                }
            }
        }

    });
};
