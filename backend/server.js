const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample student data
let students = [
  { id: 1, name: "John Doe", course: "BSc CS" },
  { id: 2, name: "Jane Smith", course: "BSc IT" },
];

// API Endpoints
app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students', (req, res) => {
  const { name, course } = req.body;
  const newStudent = { id: students.length + 1, name, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
