"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/reviews";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LoginFormData {
  email: string;
  password: string;
}

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        {/* Navbar */}
        <div className="bg-black p-4 relative">
          {/* Logo */}
          <h1 className="font-bold font-soria text-goldnew text-4xl">
            Soul Buddy
          </h1>

          {/* Golden Button in Top-Right Corner */}
          <Button
            className="absolute right-4 top-4 bg-goldnew text-black font-semibold hover:bg-orange-300 transition-all duration-300 px-6 py-2"
            onClick={() => router.push("/userform")} // Redirect to UserForm page
          >
            Sign In
          </Button>
        </div>

        {/* Background Image */}
        <div className="relative flex justify-center items-center flex-grow bg-black">
          {/* Overlay Content */}
          <div className="relative bg-[#F7E6D0] text-black text-center p-10 rounded-lg w-3/4 md:w-1/2 shadow-lg">
            <h1 className="font-[Bizantheum] text-5xl md:text-6xl ">
              Discover Your Cosmic Path!
            </h1>
            <p className="text-lg mt-4">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <Button
              className="mt-6 rounded-2xl bg-goldnew text-black font-semibold font-sans px-6 py-2 hover:bg-orange-300"
              onClick={() => router.push("/userform")} // Redirect to UserForm page
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-black p-8">
          <h1 className=" font-soria text-goldnew text-5xl text-center md:text-6xl mb-12">
            Services We Offer
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-semibold justify-center items-center text-center ">
            {[
              { service: "Zodiac Predictions", path: "/rashi" },
              { service: "Gemstone Recommendations", path: "/gemstone" },
              { service: "Spiritual Rituals", path: "/ritual-guide" },
              { service: "Yoga & Wellness", path: "/yoga" },
              { service: "Personalized Guidance", path: "/advice" },
              { service: "Palmistry Insights", path: "/palm-reading" },
              { service: "Astrological Insights", path: "/horoscopes" },
              { service: "Meditation & Mindfulness", path: "/meditate" },
            ].map(({ service, path }, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4"
              >
                <Link href={path}>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F7E6D0] rounded-full flex justify-center items-center cursor-pointer">
                    {/* Add an icon or image for each service here */}
                  </div>
                </Link>
                <Link href={path}>
                  <p className="text-lightwhite text-lg font-sans cursor-pointer">
                    {service}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-black p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center text-center font-bold">
            {[
              { service: "Privacy Guaranteed", path: "/" },
              { service: "Compentence", path: "/" },
              { service: "Expert Advice", path: "/" },
            ].map(({ service, path }, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4"
              >
                <Link href={path}>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F7E6D0] rounded-full flex justify-center items-center cursor-pointer">
                    {/* Add an icon or image for each service here */}
                  </div>
                </Link>
                <Link href={path}>
                  <p className="text-lightwhite text-lg font-sans cursor-pointer">
                    {service}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Reviews></Reviews>
      </div>
    </>
  );
}
