import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";

import ManageStudentStats from "../components/admin/ManageStudents/ManageStudentStats";
import ManageStudentFilters from "../components/admin/ManageStudents/ManageStudentFilters";
import ManageStudentTable from "../components/admin/ManageStudents/ManageStudentTable";

const studentsData = [
  {
    id: 1,
    name: "Priyanshu",
    email: "priyanshu@email.com",
    course: "Java",
    tests: 12,
    avgScore: 92,
    status: "active"
  },
  {
    id: 2,
    name: "Aman",
    email: "aman@email.com",
    course: "DBMS",
    tests: 9,
    avgScore: 55,
    status: "blocked"
  },
  {
    id: 3,
    name: "Riya",
    email: "riya@email.com",
    course: "Aptitude",
    tests: 15,
    avgScore: 87,
    status: "active"
  }
];

function ManageStudentsPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "All",
    subject: "All",
    performance: "All",
    view: "table"
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // 🔥 FILTER LOGIC
  const filteredStudents = studentsData.filter((s) => {
    if (
      filters.search &&
      !s.name.toLowerCase().includes(filters.search.toLowerCase())
    ) return false;

    if (filters.status !== "All" && s.status !== filters.status.toLowerCase())
      return false;

    if (filters.subject !== "All" && s.course !== filters.subject)
      return false;

    if (filters.performance !== "All") {
      if (filters.performance === "Top" && s.avgScore < 85) return false;
      if (filters.performance === "Average" && (s.avgScore < 50 || s.avgScore > 85)) return false;
      if (filters.performance === "Low" && s.avgScore >= 50) return false;
    }

    return true;
  });

  return (
    <AdminLayout>
      <h1 className="dashboard-header">Manage Students</h1>

      <ManageStudentStats />

      <ManageStudentFilters
        filters={filters}
        setFilters={handleFilterChange}
      />

      <ManageStudentTable
        students={filteredStudents}
        view={filters.view}
      />
    </AdminLayout>
  );
}

export default ManageStudentsPage;