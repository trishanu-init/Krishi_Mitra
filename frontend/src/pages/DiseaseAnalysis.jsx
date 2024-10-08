import React, { useState, useEffect } from 'react';
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const DiseaseAnalysis = () => {
  return (
    <div>
      <Header activeHeading={2} />
      <Predict />
      <Footer />
    </div>
  );
};

const Predict = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI("AIzaSyBSd6wvgH3elg7tvspk8onVU1BfnyrjU24");

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [gptResponse, setGptResponse] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };


  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("No file selected");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Upload image and get the result
      const response = await fetch('https://leaf-disease-detection-backend.onrender.com/process_input', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setDiseaseResult(result.result);

      // Fetch GPT content
      const prompt = `Write about ${diseaseResult} in 3 lines, suggest treatment give your answers in ${selectedLanguage}`;
    
      const output = await model.generateContent(prompt);
      const respo = await output.response;
      const content = await respo.text();
      setGptResponse(content);

    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#679267] p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        {/* Top/Left side: Image input */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-center text-green-800">Upload an Image</h2>
  
          {/* Language Selector Dropdown */}
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
            Select Language
          </label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm mb-4"
          >
            <option value="english">English</option>
            <option value="hindi">Hindi-हिन्दी</option>
            <option value="kannada">Kannada-ಕನ್ನಡ</option>
            <option value="bengali">Bengali-বাংলা</option>
            <option value="gujarati">Gujarati-ગુજરાતી</option>
            <option value="malayalam">Malayalam-മലയാളം</option>
            <option value="marathi">Marathi-मराठी</option>
            <option value="nepali">Nepali-नेपाली</option>
            <option value="punjabi">Punjabi-ਪੰਜਾਬੀ</option>
            <option value="tamil">Tamil-தமிழ்</option>
            <option value="telugu">Telugu-తెలుగు</option>
            <option value="odia">Odia</option>
          </select>
  
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
          />
          <div className="mt-4 w-full h-64 border-2 border-dashed border-green-300 rounded-lg flex items-center justify-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="rounded-lg max-w-full max-h-full shadow-md" />
            ) : (
              <span className="text-green-700">No Image Selected</span>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Submit'}
          </button>
        </div>
  
        {/* Bottom/Right side: Disease result and GPT content */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:pl-4">
          {!diseaseResult && !loading && (
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-green-800">Disease Diagnosis</h3>
              <img
                src="/handsplant.png"
                className="w-full h-full opacity-40 mt-20"
              />
            </div>
          )}
  
          {loading && (
            <div className="mt-10 p-4 bg-green-100 rounded-lg shadow-md w-full h-full text-center">
              <p className="text-green-700">Analyzing your Image. Please wait...</p>
              <div className="flex items-center justify-center">
                <iframe
                  src="https://lottie.host/embed/9fb64850-84eb-4cb3-8ab1-b623f2520aec/RIQU4wm0Rc.json"
                  width="300"
                  height="300">
                  {/* Fallback content if iframe is not supported */}
                  <img
                    src="/handsplant.png"
                    className="w-full h-full opacity-40 mt-20"/>
                </iframe>
              </div>
            </div>
          )}
  
          {diseaseResult && !loading && (
            <div className="mt-20 p-4 bg-green-100 rounded-lg shadow-md w-full text-center">
              <h3 className="text-xl font-semibold text-green-800">Detected Disease:</h3>
              <p className="text-green-700 mb-4">{diseaseResult}</p>
              {gptResponse && (
                <div>
                  <h4 className="text-lg font-semibold text-green-800">Information:</h4>
                  <p className="text-green-700 mb-4">{gptResponse}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );  
  
};

export default DiseaseAnalysis;
