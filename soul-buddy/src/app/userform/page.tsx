"use client";

import { useState } from "react";
import { User, Mail, Lock, MapPin, Calendar, Clock3, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

interface UserFormData {
  name: string;
  email: string;
  password: string;
  dob: string;
  timeofbirth: string;
  rashi: string;
  gender: string;
  location: string;
}

export default function UserForm() {
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    dob: "",
    timeofbirth: "",
    rashi: "",
    gender: "",
    location: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Your details have been submitted successfully!",
        });
        setFormData({
          name: "",
          email: "",
          password: "",
          dob: "",
          timeofbirth: "",
          rashi: "",
          gender: "",
          location: "",
        });
        router.push("/dashboard"); // Redirect to dashboard after successful submission
      } else {
        setNotification({
          type: "error",
          message: "Failed to submit details. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-[#F7E6D0] backdrop-blur-lg border-gray-700">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-light text-black mb-2">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-gray-800">
            Enter your details below to create your cosmic profile
          </CardDescription>
        </CardHeader>

        <CardContent>
          {notification && (
            <Alert
              className={`mb-6 ${
                notification.type === "success"
                  ? "bg-green-500/20 text-green-800"
                  : "bg-red-500/20 text-red-800"
              }`}
            >
              <AlertDescription>{notification.message}</AlertDescription>
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <User
                    size={16}
                    className="text-black"
                  />
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <Mail
                    size={16}
                    className="text-black"
                  />
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <Lock
                    size={16}
                    className="text-black"
                  />
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <Calendar
                    size={16}
                    className="text-black"
                  />
                  Date of Birth
                </Label>
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <Clock3
                    size={16}
                    className="text-black"
                  />
                  Time of Birth
                </Label>
                <Input
                  type="time"
                  name="timeofbirth"
                  value={formData.timeofbirth}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <Star
                    size={16}
                    className="text-black"
                  />
                  Rashi
                </Label>
                <Input
                  type="text"
                  name="rashi"
                  placeholder="Your rashi"
                  value={formData.rashi}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-black">Gender</Label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-white/80 border-gray-300 focus:border-gray-500 text-black rounded-md px-3 py-2"
                  required
                >
                  <option
                    value=""
                    className="bg-white"
                  >
                    Select Gender
                  </option>
                  <option
                    value="Male"
                    className="bg-white"
                  >
                    Male
                  </option>
                  <option
                    value="Female"
                    className="bg-white"
                  >
                    Female
                  </option>
                  <option
                    value="Other"
                    className="bg-white"
                  >
                    Other
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-black flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-black"
                  />
                  Location
                </Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="Your location"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-white/80 border-gray-300 focus:border-gray-500 text-black"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white transition-all duration-300 mt-6"
            >
              Complete Registration
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
