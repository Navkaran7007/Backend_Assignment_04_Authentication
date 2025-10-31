import express, { Express } from "express";
import morgan from "morgan"
import applicationRoutes from "./api/v1/routes/applicationRoutes"

// Initialize Express application
const app: Express = express();

// Use Morgan for HTTP request logging
app.use(morgan("combined"));
app.use("/api/v1/loans", applicationRoutes)
// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;