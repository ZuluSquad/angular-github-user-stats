module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['GitHubUserStats.js'],
                tasks: ['specs']
            }
        },
        jshint: {
            all: {
                options: {
                    undef: true,
                    eqeqeq: true
                },
                files: {
                    src: 'GitHubUserStats.js'
                }
            }
        },
        jasmine: {
            all: {
                src: 'GitHubUserStats.js',
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


