function Home() {
  return (
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
  );
}

export default Home;