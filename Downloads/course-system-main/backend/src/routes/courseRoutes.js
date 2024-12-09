const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/course', courseController.getAllCourses);
router.get('/course/:id', courseController.getCourseById);
router.post('/course', courseController.createCourse);
router.put('/course/:id', courseController.updateCourse);
router.delete('/course/:id', courseController.deleteCourse);

module.exports = router;

