require("dotenv").config(); // Load environment variables from .env file

const globals = {
    connectionStrings: {
        // MongoDB connection string from .env file
        MongoDB: process.env.CONNECTION_STRING_MONGODB,
    }
};

// Export the globals object for use in other parts of the application
module.exports = globals;