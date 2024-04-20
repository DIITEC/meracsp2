import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import meraCSP from "../../../Images/logo.png";
import "./Initialtemplates.css";
import BadgeIcon from "@mui/icons-material/Badge";
import { useNavigate } from "react-router-dom";
import CameraCapture from "./CameraCapture ";

const Initialtemplates = () => {
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [pictures, setPictures] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const modules = queryParams.get("modules");
  const questionSet = queryParams.get("fileName");
  console.log(questionSet)
  const [module, setModule] = useState("");
  const navigate = useNavigate();


  
  const handleInitStartTest = () => {
    setCameraOpen(true); // Open the camera when the test starts
  };

  const handleCameraCapture = (imageUrl) => {
    setPictures((prev) => [...prev, imageUrl]);
    console.log("Captured image URL:", imageUrl);
    localStorage.setItem("capturedImage", imageUrl);
    if (pictures.length + 1 === 3) {
      // If both images are captured, navigate
      navigate(`/ModulePaperTest?modules=${modules}&questionSet=${questionSet}`);
    }
  };

  return (
    <div className="initialTemplates">
      <div className="meanHeadinit">
        <img src={meraCSP} alt="" />
      </div>
      <h1 id="init_head"> {modules}</h1>
      <div className="lineinit"></div>
      <div className="contHead1">
        <div className="contHead1-1">
          <BadgeIcon />
          <span>Certification Exam</span>
        </div>
        <div className="contHead1-2">
          {/* Camera component */}
          {cameraOpen && <CameraCapture onCapture={handleCameraCapture} />}
          {cameraOpen && <CameraCapture onCapture={handleCameraCapture} />}
          {/* Terms and conditions */}
          {!cameraOpen && (
            <div>
              <div className="contHead1-2-1">
                <span>Duration</span>
                <span>
                  30 minutes (You can pause the test to take a break after each
                  question)
                </span>
              </div>

              <div className="contHead1-2-1">
                <span>Don't</span>
                <span>
                  You are not permitted to seek or submit solutions from any
                  other source. Do not copy or share any test content with any
                  other website or person.
                </span>
              </div>
              <div className="contHead1-2-1">
                <span>Prepare</span>
                <span>
                  IDE: This test requires programming. We recommend having a
                  development environment ready for each language listed below
                  so you can solve questions outside of the browser. Practice
                  with these questions to prepare for your test.
                </span>
              </div>
              <div className="contHead1-2-1">
                <span>Legal</span>
                <span>
                  <input
                    type="checkbox"
                    name="formaccept"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <p id="yterms">
                    I have read all of the above and I agree with the terms of
                    use and the privacy policy .
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>
        <button
          id="startInitTest"
          type="submit"
          onClick={handleInitStartTest}
          disabled={!checked} // Disable button until terms are accepted
        >
          Start The Test
        </button>
      </div>
    </div>
  );
};

export default Initialtemplates;
