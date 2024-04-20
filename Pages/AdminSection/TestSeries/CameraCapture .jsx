import React, { useRef, useState } from "react";

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [picturesTaken, setPicturesTaken] = useState(0);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      const imageUrl = canvas.toDataURL("image/jpeg");
      onCapture(imageUrl);
      setPicturesTaken((prev) => prev + 1);
      if (picturesTaken === 1) {
        stopCamera();
      }
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <button onClick={startCamera}>Start </button>
      <button onClick={captureImage}>Capture</button>
      <button onClick={stopCamera}>Stop Camera</button>
    </div>
  );
};

export default CameraCapture;


      