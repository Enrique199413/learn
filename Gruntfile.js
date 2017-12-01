module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      src: [
        'firstDuplicate/*.source.js'
      ],
      options: {
        specs: [
          'firstDuplicate/*.spec.js'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
