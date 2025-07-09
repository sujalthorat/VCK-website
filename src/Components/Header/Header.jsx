
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">Vivekanand College</div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/home" className="noUnderline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="noUnderline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="noUnderline">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="noUnderline">
                  Contact
                </Link>
              </li>
            </ul>
            <button>
              <Link to="/apply" className="noUnderline">
                Apply Now
              </Link>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
