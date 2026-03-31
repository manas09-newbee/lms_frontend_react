import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ExamPage from "./pages/ExamPage";import Register from "./pages/Register";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login WITHOUT layout */}
        <Route path="/" element={<Login />} />
         {/* Dashboards */}
        <Route path="/student/exam" element={<ExamPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

