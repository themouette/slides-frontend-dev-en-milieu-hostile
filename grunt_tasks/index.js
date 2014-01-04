module.exports = function (grunt) {
    "use strict";

    var _ = require('lodash');

    grunt.registerMultiTask('index', 'Generate index file from markdown.', function () {

        var options = this.options({
            expand: false,
            theme: 'default',
            template: './index.tpl',
            // An array of extra scripts to include.
            scripts: [],
            // An array of extra stylesheets to include
            styles: [],
            // the presentation title
            title: 'Fill `index.options.title` in Gruntfile.js',
            // description meta.
            description: grunt.config('pkg.description') || 'Fill `index.options.summary` in Gruntfile.js',
            // the author field
            author: grunt.config('pkg.author') || {name: 'fill author in package.json'},
            // social websites
            twitter: null
        });

        grunt.config.requires(
            // Slides source glob pattern.
            'config.src.slides');

        var sectionAttributes = 'data-separator="^\\n\\n\\n" data-vertical="^\\n---+\\n$" data-notes="^Note:" data-charset="utf-8"';
        var sectionTpl = options.expand
            ? '<section data-markdown <%= section_attributes %>><script type="text/template">\n<% print(grunt.file.read(filepath)) %>\n</script></section>'
            : '<section data-markdown="<%= filepath %>" <%= section_attributes %>></section>';

        var indexTpl = grunt.file.read(options.template);

        this.files.forEach(function (file) {

            // Read all the input files and generate a section block to replace content
            // for index file.
            // Depending on the `expand` option, it import markdown or uses ajax to load external files.
            var sections = file.src
                // exclude non existing files
                .filter(function checkFileExists (filepath) {
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    } else {
                        return true;
                    }
                })
                // Convert to `<section>` elements
                .map(function convertFileToSection (filepath) {
                    return grunt.template.process(sectionTpl, {
                        data: {
                            section_attributes: sectionAttributes,
                            filepath: filepath
                        }
                    });
                })
                // join all sections into one string
                .join("\n");

            // data available in template.
            // Access to grunt is available too.
            var tplData = {
                options: options,
                sections: sections};

            // process template
            var content = grunt.template.process(indexTpl, {data: tplData});
            // write output file
            grunt.file.write(file.dest, content);
            grunt.log.writeln('File "' + file.dest + '" created.');
        });
    });

    _.merge(grunt.config.data, {
        index: {
            dev: {
                options: { expand: false },
                files: [{src: '<%= config.src.slides %>', dest: 'index-dev.html'}]
            },
            release: {
                options: { expand: true },
                files: [{src: '<%= config.src.slides %>', dest: 'index.html'}]
            }
        },
        watch: {
            index: {
                files: [ '<%= config.src.slides %>', 'index.tpl', 'Gruntfile.js' ],
                tasks: 'index:dev'
            }
        }
    });
};
