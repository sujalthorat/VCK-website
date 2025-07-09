import React from "react";
import Header from "../Components/Header/Header";
import "./CoursesPage.css";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <h1>Our Academic Programs</h1>
          <p>
            Vivekanand College offers a comprehensive range of undergraduate and
            postgraduate programs designed to equip students with the knowledge
            and skills demanded by today's dynamic global landscape. Our
            curriculum is regularly updated to reflect industry trends and
            academic advancements.
          </p>
          <h2>Discover Campus Life</h2>
          <div class="videos-container">
            <video src="/videos/college-tour.mp4" controls width="100%" height="auto" ></video>
          </div>
          <h2>Undergraduate Programs (UG)</h2>
          <ul>
            <li>
              Bachelor of Science (B.Sc.)
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </li>
            <li>
              Bachelor of Commerce (B.Com)
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </li>
            <li>
              Bachelor of Arts (B.A.)
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </li>
          </ul>
          <h2>Postgraduate Programs (PG)</h2>
          <ul>
            <li>
              Master of Science (M.Sc.)
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </li>
            <li>Master of Commerce (M.Com) (2 years)</li>
            <li>Master of Arts (M.A.) (2 years)</li>
          </ul>
          <h2>Program Details & Fee Structure (Annual)</h2>
          <table class="table">
            {" "}
            <thead>
              <tr>
                <th>Program Type</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Annual Fee (INR)</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UG</td>
                <td>B.Sc. Computer Science</td>
                <td>3 Years</td>
                <td>₹ 85,000</td>
                <td>10+2 with PCM (50%)</td>
              </tr>
              <tr>
                <td>UG</td>
                <td>B.Com. Accounting &amp; Finance</td>
                <td>3 Years</td>
                <td>₹ 70,000</td>
                <td>10+2 Commerce (45%)</td>
              </tr>
              <tr>
                <td>PG</td>
                <td>M.Sc. Information Technology</td>
                <td>2 Years</td>
                <td>₹ 95,000</td>
                <td>B.Sc. IT/CS (50%)</td>
              </tr>
            </tbody>
          </table>
          <h2>Specialized & Vocational Courses</h2>
          <p>
            In addition to traditional degree programs, we offer various
            certificate and diploma courses in areas like Digital Marketing, Web
            Development, Data Analytics, and Soft Skills Development, providing
            specialized training for career enhancement.
          </p>
          <div className="inquire">
            <p>Have questions about a specific course?</p>
            <button>
              <Link to="/contact" className="noUnderline">
                Inquire About Courses
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
