module.exports = function(grunt) {

  grunt.initConfig({
    criticalcss: {
      custom: {
        options: {
          url: "http://localhost:4000",
          width: 1200,
          height: 900,
          outputfile: "./assets/critical.css",
          filename: "./assets/app.css",
          buffer: 800*1024,
          ignoreConsole: false
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-criticalcss');

  // Default task(s).
  grunt.registerTask('default', ['criticalcss']);

};
