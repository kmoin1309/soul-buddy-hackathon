'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const Page = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [prediction, setPrediction] = useState('')
  const [error, setError] = useState('')


  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  // Update the sendToLangflow function in your Next.js component
const sendToLangflow = async () => {
  if (!selectedImage) return

  setLoading(true)
  setError('')

  try {
    const formData = new FormData()
    formData.append('image', selectedImage)

    const response = await fetch('http://localhost:5000/api/palm-reading', {
      method: 'POST',
      body: formData,
    })
    console.log(response)

    if (!response.ok) {
      console.log(response)
      const errorData = await response.text()
      throw new Error(errorData || `HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    setPrediction(result.prediction || 'No prediction available')
  } catch (error) {
    console.error('Error:', error)
    setError(error instanceof Error ? error.message : 'Failed to analyze palm')
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="min-h-screen p-8" style={{
      background: 'linear-gradient(135deg, #fff3dc 0%, #ffe5b4 100%)'
    }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-amber-900">Palm Reading</h1>
        
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <div className="text-center mb-8">
            <p className="text-lg text-amber-800 mb-4">
              Discover your destiny through the ancient art of palm reading
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Upload Palm Image</h3>
              <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label 
                  htmlFor="imageUpload" 
                  className="cursor-pointer block"
                >
                  {preview ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={preview}
                        alt="Palm preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <p className="text-gray-600">Drop your palm image here or click to upload</p>
                  )}
                </label>
                <button 
                  className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 disabled:opacity-50"
                  onClick={sendToLangflow}
                  disabled={!selectedImage || loading}
                >
                  {loading ? 'Analyzing...' : 'Analyze Palm'}
                </button>
              </div>
            </div>

            <div className="bg-white/70 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Reading Results</h3>
              <div className="p-4">
                {prediction ? (
                  <p className="text-gray-700">{prediction}</p>
                ) : (
                  <p className="text-gray-500">Upload an image to receive your palm reading</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-amber-700">
              For best results, ensure good lighting and clear view of your palm lines
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page