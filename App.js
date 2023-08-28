import React, { useState } from 'react';
import Header from './components/Header';
import StudentCard from './components/StudentCard';
import SubmitButton from './components/SubmitButton';
import './App.css';

const studentsData = [
  { id: 1, name: 'Student A', present: false },
  { id: 2, name: 'Student B', present: false },
  // Add more students...
];

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleCheckboxChange = (studentId) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const handleAttendanceSubmit = () => {
    // Here, you can implement the logic to submit attendance data.
    console.log(students);
  };

  return (
    <div className="App">
      <Header />
      <div className="student-list">
        {students.map(student => (
          <StudentCard
            key={student.id}
            student={student}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <SubmitButton
        students={students}
        onSubmit={handleAttendanceSubmit}
      />
    </div>
  );
}

export default App;
