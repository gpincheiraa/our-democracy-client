/*// screen-recorder.js
var fs = require("fs"),
    path = require("path"),
    ffmpeg = require('ffmpeg-node');

module.exports = function (filename) {
    var api = Object.create(null),
        movieFile,
        recordingDir = '/home/gonzalo/projects/form29/test',
        recorder;

    api.start = function (done) {
        if (recordingDir) {
            movieFile = path.join(recordingDir, filename + ".mp4");
            ffmpeg.mp4([
                "-y", 
                "-r", "30", 
                "-g", "300",
                "-f", "x11grab",
                "-s", "1024x768",
                "-i", process.env.DISPLAY,
                "-vcodec", "qtrle", movieFile].join(' '),done);

           
        }

    };

    api.stop = function (done) {
        if (recordingDir) {
          if (recorder) {
              recorder.kill();
          }
          fs.unlink(movieFile, done);
            
        } else {
          //recorder.kill();
          done();
       // }
    };

    return api;
};*/