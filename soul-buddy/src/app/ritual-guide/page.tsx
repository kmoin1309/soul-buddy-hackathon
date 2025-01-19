"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const festivals = {
  category1: [
    { name: "Diwali", date: "November 12" },
    { name: "Holi", date: "March 25" },
    { name: "Navratri", date: "October 15" },
    { name: "Raksha Bandhan", date: "August 30" },
  ],
};

export default function RitualSelector() {
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold font-soria text-center tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SELECT RITUAL
        </motion.h1>

        {/* Upcoming Festival Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-[#fce8d4] to-[#f8d7b4] text-black overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold font-soria text-center">
                Upcoming Fest Ritual
              </h2>
              <p className="text-center mt-2 text-gray-700">
                Discover your next spiritual journey
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories */}
        {Object.entries(festivals).map(([category, items], index) => (
          <motion.div
            key={category}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold"></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((festival) => (
                <motion.div
                  key={festival.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={cn(
                      "bg-gradient-to-br from-[#deb887] font-soria to-[#d2a36c] hover:from-[#e0c097] hover:to-[#d8ab74] transition-all cursor-pointer",
                      "text-black shadow-lg",
                      selectedFestival === festival.name &&
                        "ring-4 ring-yellow-400"
                    )}
                    onClick={() => setSelectedFestival(festival.name)}
                  >
                    <CardContent className="p-6">
                      <div className="text-center space-y-3">
                        <h4 className="font-semibold text-xl">
                          {festival.name}
                        </h4>
                        <p className="text-sm text-gray-700">{festival.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
