import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, course })
    })
      .then(res => res.json())
      .then(newStudent => setStudents([...students, newStudent]));
    setName('');
    setCourse('');
  };

  return (
    <div>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name} - {s.course}</li>
        ))}
      </ul>

      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={e => setCourse(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StudentList;
