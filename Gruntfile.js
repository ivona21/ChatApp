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
        },
        bootstrap: {
            dest: 'out',
            js: [
                'bootstrap-modal.js'
            ],
            css: [
                'modals.less'
            ]
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            sass: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            html:{
                files: ['./**/*.html'],
                tasks: [],
                options: {
                    spawn: false
                }
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default task(s)
    grunt.registerTask('default', ['uglify', 'sass']);

};