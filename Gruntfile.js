module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	 compass: {
    	 dist: {
      	  options: {
           config: 'config.rb',
           bundleExec: true,
          }
         }
        },
        watch: {
          sass: {	
        	files: ['sass/**/*.scss'],
        	tasks: ['compass', 'postcss'],
          },
        },
        postcss: {
    	  options: {
      	   map: true, // inline sourcemaps
            processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
            ]
        },
          dist: {
          src: 'css/*.css'
          }
        }
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.registerTask('default', ['watch']);

};
