import Image from "next/image";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="search">
          <p>
            <i class="ri-search-line"></i>
          </p>
          <input type="text" placeholder="Search.." />
        </div>

        <div className="nav-right">
          <div className="right">
            <div className="bell">
              <h4>
                <i class="ri-notification-3-line"></i>
              </h4>
              <p>01</p>
            </div>
            <h4>
              <i class="ri-question-line"></i>
            </h4>
          </div>

          <div className="admin">
            <Image
              src="/profile.jpg"
              alt="profile-img"
              width={30}
              height={30}
              className="profile-img"
            />
            <div className="admin-info">
              <h3>Admin Name</h3>
              <p>Staff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
