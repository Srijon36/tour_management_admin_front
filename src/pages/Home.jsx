const Home = () => {
  return (
    <>
        <div className="dashboard-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">TailAdmin</h2>

        <ul className="menu">
          <li className="menu-item active">Dashboard</li>
          <li className="submenu-item">Ecommerce</li>
          <li className="menu-item">Calendar</li>
          <li className="menu-item">User Profile</li>
          <li className="menu-item">Forms</li>
          <li className="menu-item">Tables</li>
          <li className="menu-item">Pages</li>

          <h4 className="menu-title">OTHERS</h4>

          <li className="menu-item">Charts</li>
          <li className="menu-item">UI Elements</li>
          <li className="menu-item">Authentication</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="content">
        <header className="topbar">
          <input placeholder="Search or type command..." className="search" />
          <div className="topbar-right">
            <span className="icon">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="avatar"
            />
          </div>
        </header>

        {/* Stats row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon">👤</div>
            <h3>Customers</h3>
            <p className="stat-value">3,782</p>
            <span className="stat-up">+ 11.01%</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <h3>Orders</h3>
            <p className="stat-value">5,359</p>
            <span className="stat-down">- 9.05%</span>
          </div>

          <div className="target-card">
            <h3>Monthly Target</h3>
            <div className="progress-circle">
              <span>75.55%</span>
            </div>
            <p>You earn $3287 today, it’s higher than last month.</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts-section">
          <div className="chart-card">
            <h3>Monthly Sales</h3>
            <img src="/monthly_sales.png" alt="" className="chart-img" />
          </div>

          <div className="chart-card">
            <h3>Statistics</h3>
            <div className="tabs">
              <span className="tab active">Monthly</span>
              <span className="tab">Quarterly</span>
              <span className="tab">Annually</span>
            </div>
            <img src="/statistics_chart.png" alt="" className="chart-img" />
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Home;
