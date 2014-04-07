module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            single: {
                flatten: true,
                src: 'simpleslider.src.css',
                dest: 'simpleslider.css'
            }
        },
        cssmin: {
            minify: {
                src: 'simpleslider.css',
                dest: 'simpleslider.min.css'
            }
        },
        uglify: {
            build: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: 'simpleslider.js',
                    dest: '.',
                    ext: '.min.js'
                }]
            }
        },
        watch: {
            scripts: {
                files: [
                    'simpleslider.src.css'
                ],
                tasks: ['autoprefixer'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', 'List grunt tasks', function() {
        grunt.log.writeln('\n  grunt ap    : watches for CSS changes and adds vendor prefixes\
                           \n  grunt build : minifies the JS and CSS');
    });

    grunt.registerTask('ap', ['watch']);
    grunt.registerTask('build', ['cssmin', 'uglify']);
};