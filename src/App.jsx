import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import ExamPage from "./pages/ExamPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login WITHOUT layout */}
        <Route path="/" element={<Login />} />
         {/* Dashboards */}
        <Route path="/student/exam" element={<ExamPage />} />
       
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;