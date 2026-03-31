import {
  User,
  ClipboardList,
  BookOpen,
  AlertTriangle
} from "lucide-react";

function ActivityItem({ activity }) {

  const getIcon = () => {
    switch (activity.type) {
      case "student":
        return <User size={18} />;
      case "test":
        return <ClipboardList size={18} />;
      case "course":
        return <BookOpen size={18} />;
      case "alert":
        return <AlertTriangle size={18} />;
      default:
        return <User size={18} />;
    }
  };

  const getColor = () => {
    switch (activity.type) {
      case "student":
        return "blue";
      case "test":
        return "green";
      case "course":
        return "purple";
      case "alert":
        return "red";
      default:
        return "";
    }
  };

  return (
    <div className={`activity-item ${getColor()}`}>

      {/* AVATAR */}
      <div className="activity-avatar">
        {getIcon()}
      </div>

      {/* CONTENT */}
      <div className="activity-content">

        {/* NAME + TIME */}
        <div className="activity-header-line">
          <span className="activity-title">{activity.title}</span>
          <span className="activity-time">• {activity.time}</span>
        </div>

        {/* DESCRIPTION */}
        <div className="activity-desc">
          {activity.description}
        </div>

      </div>
    </div>
  );
}

export default ActivityItem;