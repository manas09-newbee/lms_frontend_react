import { Trash2, ShieldOff, ShieldCheck } from "lucide-react";
import { useState } from "react";

function ManageStudentRow({ student, onDelete, onOpen }) {
  const [status, setStatus] = useState(student.status);

  // 🔥 Toggle block/unblock
  const toggleBlock = (e) => {
    e.stopPropagation(); // prevents row click
    setStatus(status === "active" ? "blocked" : "active");
  };

  // 🔥 Delete student
  const handleDelete = (e) => {
    e.stopPropagation(); // prevents row click

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (confirmDelete) {
      onDelete(student.id);
    }
  };

  return (
    <div
      className="table-row"
      onClick={() => onOpen(student)} // 🔥 THIS makes row clickable
    >

      {/* NAME */}
      <div className="student-name">
        <div className="avatar">{student.name[0]}</div>
        <div>
          <strong>{student.name}</strong>
          <p>{student.email}</p>
        </div>
      </div>

      {/* EMAIL */}
      <span>{student.email}</span>

      {/* COURSE */}
      <span>{student.course}</span>

      {/* TESTS */}
      <span>{student.tests}</span>

      {/* SCORE */}
      <div className="score-cell">
        <span>{student.avgScore}%</span>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${student.avgScore}%` }}
          />
        </div>
      </div>

      {/* STATUS */}
      <span className={`status-badge ${status}`}>
        {status}
      </span>

      {/* ACTIONS */}
      <div
        className="actions"
        onClick={(e) => e.stopPropagation()} // 🔥 prevents row click from actions
      >
        <button onClick={toggleBlock}>
          {status === "active" ? (
            <ShieldOff className="icon block" />
          ) : (
            <ShieldCheck className="icon unblock" />
          )}
        </button>

        <button onClick={handleDelete}>
          <Trash2 className="icon delete" />
        </button>
      </div>

    </div>
  );
}

export default ManageStudentRow;