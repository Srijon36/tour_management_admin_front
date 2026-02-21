import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: "🏠", label: "Dashboard", path: "/dashboard" },
  { icon: "🧳", label: "Bookings", path: "/bookings" },
  { icon: "✈️", label: "Tours", path: "/tours" },
  { icon: "👥", label: "Customers", path: "/customers" },
  { icon: "👨‍👩‍👧‍👦", label: "Teams", path: "/teams" },
  { icon: "💳", label: "Payments", path: "/payments" },
  { icon: "📊", label: "Reports", path: "/reports" },
  { icon: "⚙️", label: "Settings", path: "/settings" },
];

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("tour_token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <div>
          <div className="logo">The Atlas Journeys</div>

          <ul className="menu">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li
                  className={`menu-item ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </li>
              </Link>
            ))}

            {/* Logout */}
            <li className="menu-item" onClick={handleLogout}>
              🔓 Sign out
            </li>
          </ul>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;