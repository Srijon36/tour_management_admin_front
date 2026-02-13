import { useState } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const menuItems = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "🧳", label: "Bookings" },
    { icon: "✈️", label: "Tours" },
    { icon: "👥", label: "Customers" },
    { icon: "👨‍👩‍👧‍👦", label: "Teams" },
    { icon: "💳", label: "Payments" },
    { icon: "📊", label: "Reports" },
    { icon: "⚙️", label: "Settings" },
    { icon: "🔓", label: "Sign out" },
  ];

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <div>
          <div className="logo">The Atlas Journeys</div>

          <nav>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={item.active ? "active" : ""}
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      <main className="main">
        <h1>Dashboard</h1>
        <p className="subtitle">
          Welcome back — {new Date().toLocaleDateString()}
        </p>

        <div className="top-stats">
          <div className="stat-card">
            <div className="stat-value">6 Tours</div>
            <div className="stat-label">Active Tours</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">132</div>
            <div className="stat-label">Bookings</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">Travel Agents</div>
          </div>

          <div className="stat-card highlight">
            <div className="stat-value">76%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
