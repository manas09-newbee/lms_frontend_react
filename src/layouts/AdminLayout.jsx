import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="layout">
      <Navbar title="Admin Panel" />
      <div className="content-area">
        <Sidebar role="admin" />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;