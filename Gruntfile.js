/* global module:false */
module.exports = function(grunt) {
    var _ = require('lodash');

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        config: {
            src: {
                // directory where revealjs is installed.
                reveal: 'reveal.js',
                // pattern that matches slides.
                slides: 'src/**/*.markdown'
            },
            // Themes related configuration.
            // All following options are used to auto-detect and generate themes.
            themes: {
                // where to store compiled css.
                css: 'css/theme',
                // reveal.js themes directory.
                // default leverage `config.src.reveal` configuration
                reveal: '<%= config.src.reveal %>/css/theme/source',
                // Your custom themes directory
                custom: '<%= config.themes.css %>/source'
            }
        }
    };


    // Project configuration
    grunt.initConfig(_.merge(config, {
        index: {
            options: {
                // template to use
//                template: 'index.tpl',
                // default theme for presentation
                // It remains possible to change it using the querystring.
                theme: 'lavajug',
                // An array of extra scripts to include.
                scripts: [],
                // An array of extra stylesheets to include
                styles: ['//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'],
                // Slidedeck title
                // This is used as cover slide title and as html title.
                title: 'Front End Developer en milieu hostile',
                // Description meta.
                // default value is extracted from `package.json`
//                description: '',
                // Slides author.
                // default value is extracted from `package.json`
                author: { name: 'Julien Muetton', url: 'http://muetton.me', email: 'julien@muetton.me'},
                // twitter username
                // If provided, will be displayed after author name.
                twitter: 'themouette',
                // cover slide image url.
                // This image is inserted between title and credits.
                // example value 'img/jslogo.jpg'
                cover: null
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    hostname: '0.0.0.0'
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch:themes', 'watch:index', 'connect:server:keepalive'],
                options: {
                    logConcurrentOutput: true,
                    limit: 3
                }
            }
        }
    }));

    grunt.loadTasks('./grunt_tasks');

    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-concurrent' );
    grunt.loadNpmTasks( 'grunt-sass' );

    grunt.registerTask('build:dev', ['themes:dev', 'index:dev']);
    grunt.registerTask('build:release', ['themes:release', 'index:release']);

    grunt.registerTask( 'dev', [ 'build:dev', 'concurrent:dev' ] );
    grunt.registerTask( 'release', [ 'build:release' ] );

    grunt.registerTask( 'default', [ 'dev' ] );
};
