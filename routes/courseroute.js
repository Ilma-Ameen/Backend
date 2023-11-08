const express = require("express");
const CourseController = require("../controllers/courseController");
const route = express.Router();

route.get("/", CourseController.get);
route.get("/:id", CourseController.getById);
route.post("/", CourseController.add);
route.delete("/:id",CourseController.del);
route.put("/:id", CourseController.edit);  

module.exports = route;
