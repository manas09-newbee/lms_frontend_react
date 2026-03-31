import { useState } from "react";
import ActivityItem from "./ActivityItem";

function Activity() {
  const [filter, setFilter] = useState("all");

  const activities = [
    {
      id: 1,
      type: "student",
      title: "Aman Sharma",
      description: "registered on the platform",
      time: "5 min ago"
    },
    {
      id: 2,
      type: "test",
      title: "React Test",
      description: "was submitted by Priya",
      time: "15 min ago"
    },
    {
      id: 3,
      type: "course",
      title: "New Course",
      description: "DSA Basics was added",
      time: "30 min ago"
    },
    {
      id: 4,
      type: "alert",
      title: "Question flagged",
      description: "reported by a student",
      time: "1 hour ago"
    }
  ];

  const filtered =
    filter === "all"
      ? activities
      : activities.filter((a) => a.type === filter);

  return (
    <div className="activity-container">

      {/* HEADER */}
      <div className="activity-top">

        <h2>Recent Activity</h2>

        <div className="activity-actions">
          <span className="mark-read">Mark all as read</span>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="student">Students</option>
            <option value="test">Tests</option>
            <option value="course">Courses</option>
            <option value="alert">Alerts</option>
          </select>
        </div>

      </div>

      {/* LIST */}
      <div className="activity-list">
        {filtered.map((item) => (
          <ActivityItem key={item.id} activity={item} />
        ))}
      </div>

    </div>
  );
}

export default Activity;