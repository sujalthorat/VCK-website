import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <div className="hero-section">
            <img alt="Vivekanand College Campus" className="hero-banner-image" src="/Images/college-banner.png"></img>
            <div className="hero-overlay-text">
            <h1  style={{ color: "black" }}>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <button>
              <Link to="/apply" className="noUnderline2">
                Apply Now!
              </Link>
            </button>
          </div>
          </div>
          <p>
            Vivekanand College is a premier educational institution dedicated to
            fostering academic excellence, innovation, and holistic development.
            Established in 1980, we have proudly served generations of students,
            empowering them to achieve their full potential.
          </p>
          <p>
            At Vivekanand College, we believe in a vibrant learning environment
            that extends beyond textbooks. Our state-of-the-art facilities,
            experienced faculty, and diverse student community create a unique
            ecosystem where curiosity thrives and future leaders are shaped.
          </p>
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li>
              <b>Legacy of Excellence:</b> Decades of commitment to quality
              education.
            </li>
            <li>
              <b>Experienced Faculty:</b> Learn from renowned experts and
              passionate educators.
            </li>
            <li>
              <b>Modern Facilities:</b> Well-equipped labs, expansive library,
              and comfortable campus.
            </li>
            <li>
              <b>Holistic Development:</b> Focus on co-curricular activities,
              sports, and community service.
            </li>
            <li>
              <b>Strong Placements:</b> Excellent career opportunities with
              leading companies.
            </li>
          </ul>
          <h2>Campus Life & Facilities</h2>
         <div class="Images-gallery">
            <img alt="Students studying in library" src="/Images/students-studying.jpeg" height={250} width={500}></img>
            <img alt="Students studying in library" src="/Images/campus-life.jpg" height={250} width={500}></img>
          </div>
          <p>
            Explore our vibrant campus and state-of-the-art facilities designed
            to enhance your learning experience and personal growth.
          </p>
          <div className="call-to-action">
            <p className="Aline">Ready to explore our courses?</p>
            <button>
              <Link to="/courses" className="noUnderline">
                Explore Courses
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;