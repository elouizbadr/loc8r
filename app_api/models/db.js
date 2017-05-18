var mongoose = require('mongoose');
require('./locations');

/* Connect to MongoDB */
var dbURI = 'mongodb://localhost/Loc8r';
if(process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

/* Monitor MongoDB Connection */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connecttion error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected!');
});

/* Closing Connection to MongoDB */
var gracefulShutdown = function(msg, callback) {
    mongoose.connection.close( function () {
        console.log('Mongoose disconnected through ' + msg);
	callback();
    });
};

// Listening for different events
/* Nodemon uses SIGUSR2 */
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    })
});

/* CTRL-C in terminal uses SIGINT */
process.once('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    })
});

/* Heroku uses SIGTERM */
process.once('SIGTERM', function () {
    gracefulShutdown('heroku app shutdown', function () {
        process.exit(0);
    })
});
