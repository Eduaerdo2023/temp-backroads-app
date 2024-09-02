import { pageLinks, socialLinks } from '../data.js'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="./src/assets/images/logo.svg"
            className="nav-logo"
            alt="backroads"
          />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((dato) => {
            return (
              <li key={dato.id}>
                <a href={dato.href} className="nav-link">
                  {" "}
                  {dato.text}
                </a>
              </li>
            );
          })}
          
        </ul>

        <ul className="nav-icons">
          {socialLinks.map(item=> {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
