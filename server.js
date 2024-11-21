
const { MongoClient } = require('mongodb');
require('dotenv').config();
// MongoDB Atlas connection string
const uri = 'mongodb+srv://jasdal22:fFBMvXeMvr7uR72f@cluster0jdsoln.8ljog.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient instance
const client = new MongoClient(uri, {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
});

async function testConnection() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Successfully connected to MongoDB');
        
        // Get the list of databases
        const databases = await client.db().admin().listDatabases();
        console.log('Databases:', databases.databases);
    } catch (err) {
        // Log any errors
        console.error('Connection failed:', err);
    } finally {
        // Close the connection after operation
        await client.close();
    }
}

testConnection();
