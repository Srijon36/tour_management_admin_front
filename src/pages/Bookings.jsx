import { useState } from "react";
import "../assets/custom.css";

function Bookings() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const bookings = [
    {
      id: "BK-1001",
      customer: "Rahul Sharma",
      tour: "Manali Adventure Package",
      date: "15 Mar - 20 Mar 2026",
      people: 4,
      amount: "₹48,800",
      status: "Confirmed",
    },
    {
      id: "BK-1002",
      customer: "Priya Patel",
      tour: "Spiti Valley Camping",
      date: "22 Apr - 28 Apr 2026",
      people: 2,
      amount: "₹36,400",
      status: "Pending",
    },
    {
      id: "BK-1003",
      customer: "Amit Kumar",
      tour: "Kerala Backwaters",
      date: "10 May - 15 May 2026",
      people: 6,
      amount: "₹92,500",
      status: "Completed",
    },
    {
      id: "BK-1004",
      customer: "Sneha Singh",
      tour: "Goa Beach Tour",
      date: "05 Feb - 09 Feb 2026",
      people: 3,
      amount: "₹42,000",
      status: "Cancelled",
    },
  ];

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      
      {/* ===== SIDEBAR ===== */}
      <aside className="sidebar">
        <div>
          <div className="logo">The Atlas Journeys</div>

          <nav>
            <a href="/dashboard">🏠 Dashboard</a>
            <a href="/bookings" className="active">🧳 Bookings</a>
            <a href="/tours">✈️ Tours</a>
            <a href="/customers">👥 Customers</a>
            <a href="/settings">👨‍👩‍👧‍👦 Teams</a>
            <a href="/payments">💳 Payments</a>
            <a href="/reports">📊 Reports</a>
            <a href="/settings">⚙️ Settings</a>
            <a href="/settings">🔓Sign Out</a>
          </nav>
        </div>

        <button className="theme-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="main">

        <div className="admin-header">
          <h2>Bookings</h2>
          <button className="add-btn">+ Add</button>
        </div>

        <div className="table-card">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Tour</th>
                <th>Date</th>
                <th>Pax</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.tour}</td>
                  <td>{booking.date}</td>
                  <td>{booking.people}</td>
                  <td>{booking.amount}</td>

                  <td>
                    <span
                      className={`badge status-${booking.status.toLowerCase()}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td>
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn view">👁️</button>
                    <button className="action-btn delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </main>
    </div>
  );
}

export default Bookings;
