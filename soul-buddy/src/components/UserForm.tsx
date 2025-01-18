'use client';

import { useState } from 'react';
import { Clock } from 'lucide-react';

interface UserFormData {
  name: string;
  email: string;
  dob: string;
  timeofbirth: string;
  rashi: string;
  gender: string;
  location: string;
}

export default function UserForm() {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    dob: '',
    timeofbirth: '',
    rashi: '',
    gender: '',
    location: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your details have been submitted successfully!');
      } else {
        alert('Failed to submit details. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        <h1 className="text-3xl font-light mb-8">
          Complete Your Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
              <label className="text-sm text-gray-400 mt-1">Name</label>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
              <label className="text-sm text-gray-400 mt-1">Email</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
              <label className="text-sm text-gray-400 mt-1">Date of Birth</label>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600 flex items-center">
                <input
                  type="time"
                  name="timeofbirth"
                  value={formData.timeofbirth}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
                <Clock className="text-gray-500" size={20} />
              </div>
              <label className="text-sm text-gray-400 mt-1">Time of Birth</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <input
                  type="text"
                  name="rashi"
                  placeholder="Your Rashi"
                  value={formData.rashi}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
              <label className="text-sm text-gray-400 mt-1">Rashi</label>
            </div>

            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <label className="text-sm text-gray-400 mt-1">Gender</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <div className="border-b border-gray-600">
                <input
                  type="text"
                  name="location"
                  placeholder="Your Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 placeholder-gray-500 focus:outline-none"
                  required
                />
              </div>
              <label className="text-sm text-gray-400 mt-1">Location</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 mt-8 hover:bg-gray-200 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}