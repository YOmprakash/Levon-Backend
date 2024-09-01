const express = require('express');
const router = express.Router();
const User = require('../Models');

// Create Student
router.post('/students', async (req, res) => {
  const {  name, grade } = req.body;
  try {
    const newStudent = new User({role: 'student', name, grade });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Students
router.get('/students', async (req, res) => {
  try {
    const students = await User.find({ role: 'student' });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create Teacher
router.post('/teachers', async (req, res) => {
  const { name, subject } = req.body;
  try {
    const newTeacher = new User({ role: 'teacher', name, subject });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Teachers
router.get('/teachers', async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher' });
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
