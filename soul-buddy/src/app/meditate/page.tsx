"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import breathe from "../../../public/services/breath_gif.gif";

// Define the component
const Page = () => {
  // Type the refs with the appropriate types
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null); // For timer cleanup

  // State for managing play status and showing prompt
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPrompt, setShowPrompt] = useState<boolean>(true);

  // Start the meditation (audio playback)
  const startMeditation = () => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowPrompt(false);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    }
  };

  // Stop the meditation (pause audio and reset states)
  const stopMeditation = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setShowPrompt(true);

      if (timerRef.current) {
        clearTimeout(timerRef.current); // Cleanup the timer if any
      }
    }
  };

  // Setup audio element and cleanup
  useEffect(() => {
    // Initialize audio with looping behavior
    const audio = new Audio("/audio/breathe.mp3");
    audio.loop = true;

    // Assign to the ref
    audioRef.current = audio;

    // Cleanup function for effect
    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the audio on cleanup
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current); // Cleanup timer if present
      }
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-8">Meditate</h1>
      <div className="relative mb-8">
        <Image
          src={breathe}
          alt="meditation visual"
          className="w-96 transition-all duration-1000 transform hover:scale-105" // Image will grow slightly on hover or for the first two seconds
          priority
        />
      </div>

      <div className="flex gap-4">
        {showPrompt && (
          <button
            onClick={startMeditation}
            className="bg-white text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Start Meditation
          </button>
        )}

        {isPlaying && (
          <button
            onClick={stopMeditation}
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition-colors"
          >
            Stop Meditation
          </button>
        )}
      </div>

      {isPlaying && (
        <div className="text-white text-lg mt-4">Meditation in progress...</div>
      )}
    </div>
  );
};

export default Page;
