"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const HoroscopePage = () => {
  const [formData, setFormData] = useState({
    year: '',
    month: '',
    date: '',
    hours: '',
    minutes: '',
    seconds: '0',
    latitude: '17.38333',
    longitude: '78.4666',
    timezone: '5.5'
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getZodiacSign = (sunSign) => {
    const signs = {
      1: "Aries",
      2: "Taurus",
      3: "Gemini",
      4: "Cancer",
      5: "Leo",
      6: "Virgo",
      7: "Libra",
      8: "Scorpio",
      9: "Sagittarius",
      10: "Capricorn",
      11: "Aquarius",
      12: "Pisces"
    };
    return signs[sunSign] || "Unknown";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://json.freeastrologyapi.com/planets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '9g6EenUFnF3iGJMOSnUWE5O3Dv2zLXyM3gPvplk3'
        },
        body: JSON.stringify({
          ...formData,
          settings: {
            observation_point: "topocentric",
            ayanamsha: "lahiri"
          }
        })
      });

      const data = await response.json();
      if (data.output) {
        const sunSign = data.output[0][1].current_sign;
        setResult(getZodiacSign(sunSign));
      }
    } catch (err) {
      setError('Failed to fetch horoscope data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Find Your Horoscope Sign</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <Input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="YYYY"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Month</label>
                <Input
                  type="number"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  placeholder="MM"
                  min="1"
                  max="12"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <Input
                  type="number"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="DD"
                  min="1"
                  max="31"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hour (24h)</label>
                <Input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  placeholder="HH"
                  min="0"
                  max="23"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Minutes</label>
                <Input
                  type="number"
                  name="minutes"
                  value={formData.minutes}
                  onChange={handleChange}
                  placeholder="MM"
                  min="0"
                  max="59"
                  required
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Calculating...' : 'Find My Sign'}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <Alert className="mt-4">
              <AlertTitle>Your Zodiac Sign</AlertTitle>
              <AlertDescription className="text-xl font-bold">{result}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default HoroscopePage;