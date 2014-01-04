// This task configure all the theme related
module.exports = function (grunt) {
    "use strict";

    grunt.config.requires(
        // reveal themes directory.
        'config.themes.reveal',
        // custom themes directory
        'config.themes.custom');

    var _ = require('lodash');
    // read config values
    // the css folder can be configured
    var cssDir = grunt.config.get('config.themes.css') || 'css/theme';
    var revealDir = grunt.config.get('config.themes.reveal');
    var customDir = grunt.config.get('config.themes.custom');

    // Turn scss files list into a { scss: css } object.
    function mapFiles (sassDir) {
        return grunt.file
            .expandMapping('*.scss', cssDir, {cwd: sassDir, ext: '.css'})
            .reduce(function(accumulator, file) {
                accumulator[file.dest] = file.src.shift();

                return accumulator;
            }, {});
    }

    // merge grunt config for themes
    // it extends confiuration set with grunt.initConfig.
    _.merge(grunt.config.data, {
        sass: {
            revealjs: {
                files: mapFiles(revealDir)
            },
            custom: {
                files: mapFiles(customDir)
            }
        },
        watch: {
            themes: {
                files: [ '<%= config.themes.custom %>/*.scss', '<%= config.themes.reveal %>/**/*.scss' ],
                tasks: 'themes:dev'
            }
        },
        cssmin: {
            compress: {
                files: {
                    '<%= config.themes.css %>/reveal.min.css': [ '<%= config.themes.css %>/reveal.css' ]
                }
            }
        }
    });

    grunt.registerTask( 'themes:dev', [ 'sass' ] );
    grunt.registerTask( 'themes:release', [ 'sass', 'cssmin' ] );
};
