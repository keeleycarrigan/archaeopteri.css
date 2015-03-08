module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pluginName: 'archaeopteri',
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: 'scss/*',
                tasks: ['sass']
            },
            html: {
                files: ['demo/*.html', 'demo/*.php']
            },
            images: {
                files: 'demo/imgs/*'
            }
        },
        sass: {
            dist: {
                files: {
                    'demo/css/<%= pluginName %>.css': 'scss/demo.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    base: 'demo/',
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['sass', 'connect','watch']);
    grunt.registerTask('build', ['sass']);
};