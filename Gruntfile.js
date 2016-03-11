module.exports = function(grunt){

    //Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: 'js/libs/client.js', //input
                dest: 'js/build/client.min.js' //output
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/site.css': 'css/libs/site.scss'
                }
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    //Default task(s)
    grunt.registerTask('default', ['uglify', 'sass']);

};