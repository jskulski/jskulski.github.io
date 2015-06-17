module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'src/**/*.js',
                'test/**/*.js'
            ],
            options: { globals: { jQuery: true } }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        karma: {
            'unit': {
                'options': {
                    'autoWatch': false,
                    'browsers': ['PhantomJS'],
                    'configFile': './test/karma.conf.js',
                    'singleRun': true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['grunt-karma']);
    grunt.registerTask('test', ['karma']);
};