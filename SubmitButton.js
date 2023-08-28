import React from 'react';

function SubmitButton({ students, onSubmit }) {
  const hasSelectedStudents = students.some(student => student.present);

  return (
    <div className="submit-button">
      <button
        onClick={onSubmit}
        disabled={!hasSelectedStudents}
      >
        Submit Attendance
      </button>
    </div>
  );
}

export default SubmitButton;
