import React from "react"
import Image from "next/image"
import hand from "../../public/logos/palm.png"
import Link from "next/link"

const Hand = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-zinc-800 to-transparent rounded-full opacity-50"></div>
            <Image 
              src={hand || "/placeholder.svg"} 
              alt="palm image with astrological symbols" 
              className="w-full max-w-md mx-auto relative z-10" 
              priority
            />
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
                Astrology Just a
                <br /> 
                finger pointing
              </h1>
              <p className="text-zinc-300 text-lg max-w-xl">
                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { service: "Rashi", path: "/rashi", description: "Reference site about Lorem Ipsum" },
                { service: "Gemstone", path: "/gemstone", description: "Reference site about Lorem Ipsum" },
                { service: "Ritual Guides", path: "/ritual-guide", description: "Reference site about Lorem Ipsum" },
              ].map(({ service, path, description }, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <Link href={path}>
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#D4B48C] rounded-full flex justify-center items-center cursor-pointer transition-transform hover:scale-105">
                      {/* Icon placeholder - replace with actual icons */}
                      <span className="text-black text-2xl">•</span>
                    </div>
                  </Link>
                  <div className="text-center space-y-2">
                    <Link href={path}>
                      <p className="text-white text-lg font-medium cursor-pointer hover:text-[#D4B48C] transition-colors">
                        {service}
                      </p>
                    </Link>
                    <p className="text-zinc-400 text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hand

