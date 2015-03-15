/**
 * Created by Chack on 2015/3/14.
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript:{
            core:{
                src:["src/*.ts"],
                dest:"js/cksvg.js",
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true,
                    removeComment:true
                }
            },
            test:{
                src:["test/*.ts"],
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true,
                    removeComment:true
                }
            },
            bridge:{
                src:["bridge/*.ts"],
                dest:"bridge/home.js",
                options: {
                    module: 'amd',
                    target: 'es5',
                    sourceMap: true,
                    removeComment:true
                }
            }
        },
        watch:{
            core:{
                files:["src/*.ts"],
                tasks:["typescript:core"]
            },
            test:{
                files:["test/*.ts"],
                tasks:["typescript:test"]
            },
            bridge:{
                files:["bridge/*.ts"],
                tasks:["typescript:bridge"]
            }
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['typescript','watch']);

};