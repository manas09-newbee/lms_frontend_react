import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Database,
  ClipboardList
} from "lucide-react";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <NavLink
        to="/admin/dashboard"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <LayoutDashboard size={18} />
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/manage-students"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <Users size={18} />
        Manage Students
      </NavLink>

      <NavLink
        to="/admin/manage-courses"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <BookOpen size={18} />
        Manage Courses
      </NavLink>

      <NavLink
        to="/admin/question-bank"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <Database size={18} />
        Question Bank
      </NavLink>

      <NavLink
        to="/admin/create-test"
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        <ClipboardList size={18} />
        Create Test
      </NavLink>
    </div>
  );
}

export default AdminSidebar;