module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['*.js'],
                tasks: ['specs']
            }
        },
        jshint: {
            all: {
                options: {
                    /*undef: true,*/
                    eqeqeq: true
                },
                files: {
                    src: '*.js'
                }
            }
        },
        jasmine: {
            all: {
                src: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-mocks/angular-mocks.js',
                    'GitHubUserStats.js'
                ],
                options: {
                    specs: 'GitHubUserStats.spec.js',
                    outfile: 'specs.html',
                    keepRunner: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('specs', ['jshint', 'jasmine:all']);
    grunt.registerTask('default', ['specs']);
    grunt.registerTask('dev', ['default', 'watch']);
};


