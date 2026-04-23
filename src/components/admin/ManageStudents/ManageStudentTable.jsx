import { useState } from "react";
import ManageStudentRow from "./ManageStudentRow";
import StudentPanel from "./StudentPanel";

function ManageStudentTable({ students }) {

  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <>
      <div className="students-table">

        <div className="table-header">
          <span>Name</span>
          <span>Email</span>
          <span>Course</span>
          <span>Tests</span>
          <span>Score</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        <div className="table-body">
          {students.map((s) => (
            <ManageStudentRow
              key={s.id}
              student={s}
              onOpen={setSelectedStudent}
              onDelete={() => alert("Handle delete in parent")}
            />
          ))}
        </div>

      </div>

      {selectedStudent && (
        <StudentPanel
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </>
  );
}

export default ManageStudentTable;