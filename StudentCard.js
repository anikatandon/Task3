import React from 'react';

function StudentCard({ student, onCheckboxChange }) {
  return (
    <div className="student-card">
      <label>
        <input
          type="checkbox"
          checked={student.present}
          onChange={() => onCheckboxChange(student.id)}
        />
        {student.name}
      </label>
    </div>
  );
}

export default StudentCard;
