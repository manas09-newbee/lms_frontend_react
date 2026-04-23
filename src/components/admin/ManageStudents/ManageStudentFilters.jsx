import { Search, Flame, AlertTriangle, Ban } from "lucide-react";

function ManageStudentFilters({ filters, setFilters }) {
  const update = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      status: "All",
      subject: "All",
      performance: "All",
      view: "table",
    });
  };

  const toggleQuick = (type, value) => {
    if (type === "status") {
      update("status", filters.status === value ? "All" : value);
    } else {
      update("performance", filters.performance === value ? "All" : value);
    }
  };

  return (
    <div className="filters-container">
      {/* 🔍 SEARCH + CLEAR */}
      <div className="filters-top">
        <div className="filters-search">
          <Search size={18} />
          <input
            placeholder="Search students..."
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        <button className="clear-btn" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      {/* 🔥 HORIZONTAL FILTER GRID */}
      <div className="filters-grid">
        {/* 🔥 QUICK */}
        <div className="filter-section">
          <h4>Quick</h4>
          <div className="filter-chips">
            <button
              className={`chip icon ${
                filters.performance === "Top" ? "active" : ""
              }`}
              onClick={() => toggleQuick("performance", "Top")}
            >
              <Flame size={14} /> Top
            </button>

            <button
              className={`chip icon ${
                filters.performance === "Low" ? "active" : ""
              }`}
              onClick={() => toggleQuick("performance", "Low")}
            >
              <AlertTriangle size={14} /> Low
            </button>

            <button
              className={`chip icon ${
                filters.status === "Blocked" ? "active" : ""
              }`}
              onClick={() => toggleQuick("status", "Blocked")}
            >
              <Ban size={14} /> Blocked
            </button>
          </div>
        </div>

        {/* 🟢 STATUS */}
        <div className="filter-section">
          <h4>Status</h4>
          <div className="filter-chips">
            {["All", "Active", "Blocked"].map((item) => (
              <button
                key={item}
                className={`chip ${filters.status === item ? "active" : ""}`}
                onClick={() => update("status", item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 🟣 SUBJECT */}
        <div className="filter-section">
          <h4>Subject</h4>
          <div className="filter-chips">
            {["All", "Java", "DBMS", "Aptitude"].map((item) => (
              <button
                key={item}
                className={`chip ${filters.subject === item ? "active" : ""}`}
                onClick={() => update("subject", item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* 🟡 PERFORMANCE */}
        <div className="filter-section">
          <h4>Performance</h4>
          <div className="filter-chips">
            {["All", "Top", "Average", "Low"].map((item) => (
              <button
                key={item}
                className={`chip ${
                  filters.performance === item ? "active" : ""
                }`}
                onClick={() => update("performance", item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStudentFilters;
