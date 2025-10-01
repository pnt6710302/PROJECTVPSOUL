import React from "react";
import "./App.css";
import { FaHome, FaSmile, FaCalendarAlt, FaHeadphones, FaRobot, FaBook, FaCog, FaComment } from "react-icons/fa";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo"> VP Soul</h2>
        <nav>
          <ul>
            <li><FaHome /> Dashboard</li>
            <li><FaRobot /> Tâm Trạng</li>
            <li><FaComment /> Trò chuyện</li>
            <li><FaBook /> Nhật kí</li>
            <li><FaCalendarAlt /> Lịch Trình</li>
            <li><FaHeadphones /> Thư Giãn</li>
            <li><FaCog /> Cài Đặt</li>
          </ul>
        </nav>
      </aside>

      
    </div>
  );
}

export default App;
