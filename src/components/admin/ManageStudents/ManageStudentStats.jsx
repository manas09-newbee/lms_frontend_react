import { Users, UserCheck, UserX, UserPlus } from "lucide-react";

function ManageStudentStats() {
  return (
    <div className="students-stats">

      {/* TOTAL */}
      <div className="stat-card dark blue">
        <div className="stat-icon">
          <Users size={20} />
        </div>
        <h2>120</h2>
        <p>Total Students</p>
      </div>

      {/* ACTIVE */}
      <div className="stat-card dark green">
        <div className="stat-icon">
          <UserCheck size={20} />
        </div>
        <h2>95</h2>
        <p>Active Students</p>
      </div>

      {/* BLOCKED */}
      <div className="stat-card dark red">
        <div className="stat-icon">
          <UserX size={20} />
        </div>
        <h2>25</h2>
        <p>Blocked Students</p>
      </div>

      {/* NEW */}
      <div className="stat-card dark purple">
        <div className="stat-icon">
          <UserPlus size={20} />
        </div>
        <h2>12</h2>
        <p>New This Week</p>
      </div>

    </div>
  );
}

export default ManageStudentStats;