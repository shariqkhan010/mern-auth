import express from "express";
import { test } from "../controllers/user.controller.js"; //This imports a specific function named test from the user.controller.js file, which is expected to handle the logic for the route.

const router = express.Router(); //This creates a new router instance. The router is a mini Express application that can handle its own routes and middleware.

router.get("/", test);

export default router;
