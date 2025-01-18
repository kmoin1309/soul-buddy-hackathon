"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "../../public/logos/bg_gif_2.gif";
import Link from "next/link";
//import image from "../../public/logos/image.png";
import Hand from "@/components/hand";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-black p-4">
          <h1 className="font-bold font-soria text-goldnew text-4xl">
            Soul Buddy
          </h1>
          <Button className="font-sans bg-goldnew w-20 font-semibold text-black hover:bg-orange-300">
            Login
          </Button>
        </div>

        {/* Background Image */}
        <div className="relative flex justify-center items-center flex-grow bg-black">
          <Image
            src={bg}
            alt="Background image"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Overlay Content */}
          <div className="relative bg-[#F7E6D0] text-black text-center p-10 rounded-lg w-3/4 md:w-1/2 shadow-lg">
            <h1 className="font-[Bizantheum] text-5xl md:text-6xl ">
              Discover Your Cosmic Path!
            </h1>
            <p className="text-lg mt-4">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <Button className="mt-6 rounded-2xl bg-goldnew text-black font-semibold font-sans px-6 py-2 hover:bg-orange-300">
              Get Started
            </Button>
          </div>
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
            <div key={index} className="flex flex-col items-center space-y-4">
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
      <Hand></Hand>

      <div className="bg-black p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center text-center font-bold">
          {[
            { service: "Privacy Guaranteed", path: "/" },
            { service: "Compentence", path: "/" },
            { service: "Expert Advice", path: "/" },
          ].map(({ service, path }, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
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
    </>
  );
}
