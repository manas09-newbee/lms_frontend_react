import { BookOpen, Clock, CheckCircle, CalendarDays } from "lucide-react";
import StudentSidebar from "../components/StudentSidebar";

function StudentDashboard() {
  return (
    <div className="layout">
      <StudentSidebar />

      <div className="main-content">
        <h1 className="dashboard-header">Student Dashboard</h1>

        <div className="card-grid">

          <div className="dashboard-card modern-card">
            <div className="card-content">
              <div>
                <h3>Enrolled Courses</h3>
                <div className="card-number">5</div>
              </div>
              <BookOpen size={40} strokeWidth={2.5} className="card-icon" />
            </div>
          </div>

          <div className="dashboard-card modern-card">
            <div className="card-content">
              <div>
                <h3>Upcoming Tests</h3>
                <div className="card-number">2</div>
              </div>
              <Clock size={40} strokeWidth={2.5} className="card-icon" />
            </div>
          </div>

          <div className="dashboard-card modern-card">
            <div className="card-content">
              <div>
                <h3>Completed Tests</h3>
                <div className="card-number">8</div>
              </div>
              <CheckCircle size={40} strokeWidth={2.5} className="card-icon" />
            </div>
          </div>

          <div className="dashboard-card modern-card">
            <div className="card-content">
              <div>
                <h3>Schedule</h3>
                <div className="card-number">3</div>
              </div>
              <CalendarDays size={40} strokeWidth={2.5} className="card-icon" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;