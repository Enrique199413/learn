module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      src: [
        'list/*.js'
      ],
      options: {
        specs: ['list-test/*.test.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
