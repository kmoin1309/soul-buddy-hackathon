"use client";

<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bg from "../../public/logos/bg_gif_2.gif";
import Link from "next/link";
import Hand from "@/components/hand";
import Reviews from "@/components/reviews";
import rashi from "../../public/services/rashi.png"
import ritual from "../../public/services/ritual.png"
import gem from "../../public/services/gem.png"
import meditate from "../../public/services/meditate.png"
import yoga from "../../public/services/yoga.png"
import horoscope from "../../public/services/horoscope.png"
import read from "../../public/services/read.png"
import advice from "../../public/services/advice.png"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-lightwhite">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold font-soria text-goldnew text-4xl">
            Soul Buddy
          </h1>
          <Button className="font-sans bg-goldnew w-24 font-semibold text-black hover:bg-orange-300 transition-colors">
            Login
=======
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Hand } from "lucide-react";
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
>>>>>>> 8227fbe7e634d65a04adad2984800c0d1ea70b3b
          </Button>
        </div>
      </nav>

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex justify-center items-center">
        <Image
          src={bg }
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          priority
        />

        <div className="relative bg-[#F7E6D0] text-black text-center p-10 rounded-lg w-11/12 md:w-3/5 lg:w-1/2 shadow-2xl">
          <h1 className="font-[Bizantheum] text-5xl md:text-6xl lg:text-7xl mb-6">
            Discover Your Cosmic Path!
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Embark on a journey of self-discovery and unlock the secrets of the universe. Let the stars guide your way to enlightenment and inner peace.
          </p>
          <Button className="rounded-full bg-goldnew text-black font-semibold font-sans px-8 py-3 text-lg hover:bg-orange-300 transition-colors">
            Get Started
          </Button>
=======
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
>>>>>>> 8227fbe7e634d65a04adad2984800c0d1ea70b3b
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
      <section className="bg-black py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-soria text-goldnew text-5xl md:text-6xl text-center mb-16">
            Services We Offer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { service: "Find Your Zodiac ", path: "/rashi", icon: <Image src={rashi} alt="rashi" className="w-22"/> },
              { service: "Gemstone Recommendations", path: "/gemstone", icon: <Image src={gem} alt="gem" className="w-22"/> },
              { service: "Spiritual Rituals", path: "/ritual-guide", icon:  <Image src={ritual} alt="ritual" className="w-22"/> },
              { service: "Yoga & Wellness", path: "/yoga", icon:  <Image src={yoga} alt="yoga" className="w-22"/>},
              { service: "Personalized Guidance", path: "/advice", icon: <Image src={advice} alt="yoga" className="w-24"/> },
              { service: "Palmistry Insights", path: "/palm-reading", icon: <Image src={read} alt="yoga" className="w-22"/> },
              { service: "Astrological Insights", path: "/horoscopes", icon: <Image src={horoscope} alt="yoga" className="w-22"/>},
              { service: "Meditation & Mindfulness", path: "/meditate", icon:  <Image src={meditate} alt="gem" className="w-22"/> },
            ].map(({ service, path, icon }, index) => (
              <Link key={index} href={path} className="group">
                <div className="flex flex-col items-center space-y-4 transition-transform transform hover:scale-105">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-full flex justify-center items-center text-4xl md:text-5xl shadow-lg group-hover:shadow-xl transition-shadow">
                    {icon}
                  </div>
                  <p className="text-lightwhite text-lg md:text-xl font-sans text-center group-hover:text-goldnew transition-colors">
                    {service}
                  </p>
=======
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
>>>>>>> 8227fbe7e634d65a04adad2984800c0d1ea70b3b
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <Hand />
      <Reviews />
    </div>
=======
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
    </>
>>>>>>> 8227fbe7e634d65a04adad2984800c0d1ea70b3b
  );
}

