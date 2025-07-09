import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import ApplyNowPage from "./pages/ApplyNowPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponent";
import { useState } from "react";
import DeveloperInfoPopup from "./Components/DevloperInfo/DeveloperInfoPopup";


  const App = () => {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
      setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sujal Amol Thorat"
          studentPhotoUrl="/Images/pradyumna.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyNowPage />} />
        </Routes>
        <ChatbotComponent/>
      </Router>
    </>
  );
}

export default App;
