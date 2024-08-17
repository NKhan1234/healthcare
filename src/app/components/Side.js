function Side() {
  return (
    <div>
      <div className="side">
        <div className="logo">
          <div className="logo-in">
            <h2 className="logo-h2">TT</h2>

            <div className="logo-text">
              <h2>
                BHARA<span className="orange">T</span>
                <span className="green">T</span>DM
                {/* <p>Tele-Diagnostic Machine</p> */}
              </h2>
            </div>
          </div>
        </div>

        <div className="side-nav">
          <div className="nav-element">
            <p>
              <i class="ri-dashboard-line"></i>
            </p>
            <h3>Dashboards</h3>
          </div>
          <div className="nav-element">
            <p>
              <i class="ri-user-line"></i>
            </p>
            <h3>TDM</h3>
          </div>
          <div className="nav-element">
            <p>
              <i class="ri-user-line"></i>
            </p>
            <h3>TDM locations</h3>
          </div>
          <div className="nav-element">
            <p>
              <i class="ri-bar-chart-grouped-line"></i>
            </p>
            <h3>Revenue Management</h3>
          </div>
        </div>

        <div className="logout">
          <h3>Log Out</h3>
          <p>
            <i class="ri-login-box-line"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Side;
