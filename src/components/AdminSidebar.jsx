import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <Link className="sidebar-link" to="/admin/dashboard">Dashboard</Link>
      <Link className="sidebar-link" to="/admin/manage-students">Manage Students</Link>
      <Link className="sidebar-link" to="/admin/manage-courses">Manage Courses</Link>
      <Link className="sidebar-link" to="/admin/question-bank">Question Bank</Link>
      <Link className="sidebar-link" to="/admin/create-test">Create Test</Link>
    </div>
  );
}

export default AdminSidebar;