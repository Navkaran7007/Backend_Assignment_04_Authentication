import express, { Express } from "express";
import { accessLogger, consoleLogger, errorLogger } from "./api/v1/middleware/logger";
import applicationRoutes from "./api/v1/routes/applicationRoutes"
import errorHandler from "./api/v1/middleware/errorHanlder";

// Initialize Express application
const app: Express = express();


// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

// Body parsing middleware
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/api/v1/loans", applicationRoutes)

// Global error handling middleware (MUST be applied last)
app.use(errorHandler);

export default app;