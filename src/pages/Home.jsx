import { useState } from "react";
import "../assets/custom.css";   // 🔥 IMPORTANT FIX

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const menuItems = [
    { icon: "🏠", label: "Dashboard", active: true },
    { icon: "🧳", label: "Bookings" },
    { icon: "🗺️", label: "Tours" },
    { icon: "👥", label: "Customers" },
    { icon: "🌄", label: "Destinations" },
    { icon: "💳", label: "Payments" },
    { icon: "📊", label: "Reports" },
    { icon: "⚙️", label: "Settings" },
  ];

  const stats = [
    { title: "Total Bookings", value: "2,847", change: "+18%", icon: "🛫" },
    { title: "Total Revenue", value: "$184,920", change: "+12%", icon: "💰" },
    { title: "New Customers", value: "421", change: "-3%", icon: "👤" },
    { title: "Cancellation Rate", value: "4.8%", change: "-1.2%", icon: "❌" },
  ];

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      <aside className="sidebar">
        <div className="logo">Tripco</div>

        <nav>
          {menuItems.map((item) => (
            <a key={item.label} href="#" className={item.active ? "active" : ""}>
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      <main className="main">
        <h1>Dashboard</h1>
        <p className="subtitle">
          Welcome back — {new Date().toLocaleDateString()}
        </p>

        <div className="stats">
          {stats.map((stat, i) => (
            <div className="card" key={i}>
              <div className="card-icon">{stat.icon}</div>
              <div className="card-title">{stat.title}</div>
              <div className="card-value">{stat.value}</div>
              <div>
                <span
                  className={
                    stat.change.startsWith("+")
                      ? "change-positive"
                      : "change-negative"
                  }
                >
                  {stat.change}
                </span>{" "}
                this month
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
