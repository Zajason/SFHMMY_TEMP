import React, { useState } from "react";
import { Meteors } from "../components/meteorAnimation.tsx"; // Adjust the path to Meteors component
import Image from "next/image";

const PaperSubmission = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert(`File submitted: ${selectedFile.name}`);
    } else {
      alert("Please select a file before submitting.");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white flex items-center justify-between">
      {/* Meteor animation */}*{" "}
      <div className="absolute inset-0 z-0">
        <Meteors number={30} />
      </div>
      {/* Logo on the left */}
      <div className="relative z-10 ml-8">
        <Image
          src="/images/Official Logo ΣΦΗΜΜΥ 16 for dark.png" // Replace with your actual logo path
          alt="Logo"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      {/* File upload area */}
      <div className="relative z-10 flex flex-col items-center justify-center mr-16 bg-gray-800 p-6 rounded-lg shadow-lg w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Submit Your Paper
        </h1>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed ${
            dragging ? "border-blue-400" : "border-gray-400"
          } rounded-lg p-6 w-full text-center`}
        >
          <p className="text-lg mb-4">
            {selectedFile
              ? `Selected File: ${selectedFile.name}`
              : "Drag and drop your file here or click below to upload."}
          </p>
          <input
            type="file"
            id="fileUpload"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Select File
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaperSubmission;
