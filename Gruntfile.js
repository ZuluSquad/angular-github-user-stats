module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['AngularUserStats.js'],
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
                    src: 'AngularUserStats.js'
                }
            }
        },
        jasmine: {
            all: {
                src: 'AngularUserStats.js',
                options: {
                    specs: 'AngularUserStats.spec.js',
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


