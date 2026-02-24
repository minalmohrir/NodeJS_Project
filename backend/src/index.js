import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: "./.env" // Load environment variables from .env file
});

const startServer = async () => {
    try {
        await connectDB(); // Connect to the database

        app.on("error", (error) => {
            console.log("Server error", error);
            throw error; // Rethrow the error to be caught by the catch block

        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: 
                ${process.env.PORT || 8000}`);
        });
        
    } catch (error) {
        console.log("Failed to start the server", error);  
        throw error;

    }
}

startServer(); // Start the server