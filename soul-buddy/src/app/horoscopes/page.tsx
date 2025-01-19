"use client"

import React, { useState } from "react"
//import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import axios from "axios"

export default function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("")
  const [horoscope, setHoroscope] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const signs = [
    "aries", "taurus", "gemini", "cancer", "leo", "virgo",
    "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
  ]

  const periods = ["today", "weekly", "monthly"]

  const fetchHoroscope = async () => {
    if (!selectedSign || !selectedPeriod) {
      setError("Please select both a sign and time period")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const options = {
        method: "GET",
        url: `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/${selectedSign}/${selectedPeriod}/general`,
        headers: {
          "x-rapidapi-key": "4fa1e848b7mshd8a09d33bdddfdfp18bbe1jsnc2112d79ed18",
          "x-rapidapi-host": "horoscopes-ai.p.rapidapi.com",
        },
      }

      const response = await axios.request(options)
      setHoroscope(response.data.general[0])
    } catch (error) {
      setError("Failed to fetch horoscope. Please try again later.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-serif text-center tracking-wider">HORSCOPE</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`
                p-6 rounded-2xl text-center font-light tracking-wider transition-all
                ${selectedPeriod === period 
                  ? 'bg-[#DEB887] text-black' 
                  : 'bg-black border-2 border-[#DEB887] text-[#DEB887] hover:bg-[#DEB887] hover:text-black'
                }
              `}
            >
              {period.toUpperCase()}
            </button>
          ))}
        </div>

        <Select value={selectedSign} onValueChange={setSelectedSign}>
          <SelectTrigger className="bg-transparent border-[#DEB887] text-[#DEB887]">
            <SelectValue placeholder="Choose your zodiac sign" />
          </SelectTrigger>
          <SelectContent>
            {signs.map((sign) => (
              <SelectItem key={sign} value={sign}>
                {sign.charAt(0).toUpperCase() + sign.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="w-full bg-[#DEB887] text-black hover:bg-[#C19A6B] transition-colors py-6 text-lg font-light tracking-wider"
          onClick={fetchHoroscope}
          disabled={isLoading}
        >
          {isLoading ? "Reading the stars..." : "REVEAL YOUR DESTINY"}
        </Button>

        {error && (
          <div className="text-red-400 text-center p-4 border border-red-400 rounded-lg">
            {error}
          </div>
        )}

        {horoscope && !error && (
          <div className="p-6 border border-[#DEB887] rounded-lg space-y-4">
            <h3 className="text-xl font-light tracking-wider text-[#DEB887]">
              {selectedSign.toUpperCase()} • {selectedPeriod.toUpperCase()}
            </h3>
            <p className="text-gray-300 leading-relaxed">{horoscope}</p>
          </div>
        )}
      </div>
    </div>
  )
}
