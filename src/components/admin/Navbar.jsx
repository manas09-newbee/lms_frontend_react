import { useState } from "react";
import { Search, Bell } from "lucide-react";

function Navbar({ title }) {

  const admin = {
    name: "Priyanshu Naithani",
    email: "goldynaithani16@gmail.com"
  };

  const [open, setOpen] = useState(false);

  const initials = admin.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="admin-navbar">

      <div className="admin-nav-left">
        <h2>{title}</h2>
      </div>

      <div className="admin-nav-center">
        <div className="admin-search">
          <Search size={18} />
          <input placeholder="Search..." />
        </div>
      </div>

      <div className="admin-nav-right">

        <Bell size={22} className="admin-bell" />

        <div
          className="admin-profile"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="admin-avatar">{initials}</div>

          {open && (
            <div className="admin-dropdown">
              <strong>{admin.name}</strong>
              <p>{admin.email}</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default Navbar;