const mongoose = require('mongoose');
var colors = require('@colors/colors');
const connectDB = async () => {
    try {
        // Connect to MongoDB
        const connection = await mongoose.connect(process.env.DB, { dbName: "TaskManager" }, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connection.connection.host}`.green.bold);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`.error);
        process.exit(1); // Exit process with failure
    }
};

// Graceful shutdown on server stop
const handleExit = () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed');
        process.exit(0);
    });
};

// Listen for termination signals
process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);

module.exports = connectDB;
