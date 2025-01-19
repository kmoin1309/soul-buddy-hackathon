import {
  Mic,
  MicOff,
  Sparkles,
  Brain,
  Volume2,
  Bot,
  ChevronDown,
} from "lucide-react";
import axios from "axios";
import React, { useState, useRef } from "react";

const advice = () => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleMicClick = () => {
    if (!isListening) {
      setIsListening(true);
      setIsProcessing(true);
      startRecording();
    } else {
      setIsListening(false);
      sendAudio();
    }
  };

  // const startRecording = () => {
  //   console.log("Starting recording...");
  //   navigator.mediaDevices
  //     .getUserMedia({ audio: true })
  //     .then((stream) => {
  //       mediaRecorderRef.current = new MediaRecorder(stream);
  //       mediaRecorderRef.current.ondataavailable = (event) => {
  //         audioChunksRef.current.push(event.data);
  //       };
  //       mediaRecorderRef.current.onstop = () => {
  //         const audioBlob = new Blob(audioChunksRef.current, {
  //           type: "audio/wav",
  //         });
  //         audioChunksRef.current = [];
  //         sendAudioToServer(audioBlob);
  //       };
  //       mediaRecorderRef.current.start();
  //     })
  //     .catch((error) => {
  //       console.error("Error accessing microphone:", error);
  //       setIsListening(false);
  //       setIsProcessing(false);
  //     });
  // };
  const [audioBlob, setAudioBlob] = useState(null);

  const stopRecording = () => {
    console.log("Stopping recording...");
    if (mediaRecorderRef.current) {
      console.log("Media Recorder:", mediaRecorderRef.current);
      mediaRecorderRef.current.stop();
    }
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (event) => {
      setAudioBlob(event.data);
    };
    mediaRecorder.start();

    setTimeout(() => {
      mediaRecorder.stop();
    }, 5000); // Record for 5 seconds
  };

  const recieveAudio = async () => {
    // we are getting audio from the server so get it as blob and play it
    const response = await axios.get("http://localhost:5000/api/getaudio", {
      responseType: "arraybuffer", // Important for binary data
    });
        const audioBlob = new Blob([response.data], { type: "audio/wav" });
    console.log("Audio Blob:", audioBlob);
    const audioURL = URL.createObjectURL(audioBlob);
    console.log("Audio URL:", audioURL);
    const audio = new Audio(audioURL);
    audio.oncanplaythrough = () => {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    };

    audio.onerror = (error) => {
      console.error("Error with audio element:", error);
    };

    setIsProcessing(false);
  };

  const sendAudio = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob, "audio.wav");

      setIsProcessing(true);
      // use axios here to send the audio to the server

      try {
        // const response = await fetch("http://localhost:5000/api/getinput", {
        //   method: "POST",
        //   body: formData,
        // });
        const response = await axios.post(
          "http://localhost:5000/api/getinput",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response);
        // setMessage(response.data);

        if (!response.ok) {
          throw new Error("Failed to fetch audio response from server");
        }
        recieveAudio();
        // console.log("Response:", response);

        // const audioBlob = await response.blob();
        // console.log("Audio Blob:", audioBlob);
        // // Create a URL for the audio and play it
        // const audioURL = URL.createObjectURL(audioBlob);
        // console.log("Audio URL:", audioURL);
        // const audio = new Audio(audioURL);
        // audio.oncanplaythrough = () => {
        //   audio.play().catch((error) => {
        //     console.error("Error playing audio:", error);
        //   });
        // };

        // audio.onerror = (error) => {
        //   console.error("Error with audio element:", error);
        // };

        setIsProcessing(false);
      } catch (error) {
        console.error("Error:", error);
        recieveAudio();
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                VoiceAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900">
                Demo
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Your AI Assistant</span>
                  <span className="block text-blue-500">Powered by Voice</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Experience the future of interaction with our advanced voice
                  assistant. Just speak naturally and let AI do the rest.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <ChevronDown className="animate-bounce w-6 h-6 text-blue-500" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <div id="demo" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Try It Now
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Click the microphone to start your conversation
            </p>
          </div>

          {/* Demo Section */}
          <div className="mt-10 flex flex-col items-center justify-center">
            {/* Voice Assistant Demo Component */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex flex-col items-center space-y-6">
                <button
                  onClick={handleMicClick}
                  className={`relative p-6 rounded-full transition-all duration-200 ${
                    isListening ? "bg-red-100" : "bg-blue-100"
                  }`}
                >
                  {isProcessing && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-blue-200 opacity-75"></span>
                  )}

                  {isProcessing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                    </div>
                  )}

                  {isListening ? (
                    <Mic className="w-8 h-8 text-red-500" />
                  ) : (
                    <MicOff className="w-8 h-8 text-blue-500" />
                  )}
                </button>

                <p className="text-gray-600 text-center">
                  {isProcessing
                    ? "Listening and Processing..."
                    : isListening
                    ? "Listening..."
                    : "Click the microphone to start"}
                </p>

                {message && (
                  <div className="w-full p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-800">{message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      {/* <div id="features" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Powerful Voice Features
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<Sparkles className="h-6 w-6" />}
                title="Natural Language"
                description="Speak naturally and get human-like responses powered by advanced AI"
              />
              <FeatureCard 
                icon={<Brain className="h-6 w-6" />}
                title="Smart Context"
                description="Our AI remembers your conversation and provides contextual responses"
              />
              <FeatureCard 
                icon={<Volume2 className="h-6 w-6" />}
                title="Crystal Clear Audio"
                description="High-quality voice input and output for seamless communication"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">VoiceAI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
      {icon}
    </div>
    <h3 className="mt-6 text-lg font-medium text-gray-900">{title}</h3>
    <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
  </div>
);

export default advice;