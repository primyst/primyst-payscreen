'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, Share2, Check, Clock, Receipt } from 'lucide-react'

export default function PaymentStatus() {
  const [isPrinting, setIsPrinting] = useState(true)
  const [printProgress, setPrintProgress] = useState(0)

  useEffect(() => {
    if (isPrinting && printProgress < 100) {
      const timer = setTimeout(() => {
        setPrintProgress(prev => Math.min(prev + 2, 100))
      }, 30)
      return () => clearTimeout(timer)
    } else if (printProgress >= 100) {
      setTimeout(() => setIsPrinting(false), 500)
    }
  }, [isPrinting, printProgress])

  const participants = [
    { name: 'You', avatar: 'you.png', paid: true },
    { name: 'Olabode', avatar: 'ola.png', paid: true },
    { name: 'Lukmon', avatar: 'lukeman.png', paid: true },
    { name: 'Hope', avatar: 'hope.png', paid: false },
    { name: 'Dara', avatar: 'dara.png', paid: false },
  ]

  const receiptHeight = 720
  const initialOffset = -receiptHeight

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-lg mb-6">
          <div className="flex items-center justify-between p-6">
            <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Payment Status</h1>
            <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Machine & Receipt Container */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="relative">

            {/* --- MACHINE ENTRANCE --- */}
            <div
              className="relative bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500 overflow-hidden z-20"
              style={{
                borderTopLeftRadius: '1.5rem',
                borderTopRightRadius: '1.5rem',
                borderBottomLeftRadius: '2rem',
                borderBottomRightRadius: '2rem',
              }}
            >
              <div className="flex">
                {/* Left Side */}
                <div className="w-12 bg-gradient-to-br from-gray-700 to-gray-600 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                {/* Center Slot */}
                <div className="flex-1 pt-8 pb-6">
                  <div
                    className="mx-4 rounded-b-2xl overflow-hidden relative"
                    style={{
                      background:
                        'linear-gradient(to bottom, #000000 0%, #0a0a12 50%, #1a1a2e 100%)',
                      boxShadow:
                        'inset 0 8px 20px rgba(0,0,0,0.9), inset 0 -4px 10px rgba(255,255,255,0.05)',
                    }}
                  >
                    <div className="h-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
                      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/10 via-white/5 to-transparent"></div>
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/70 to-transparent"></div>
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/70 to-transparent"></div>
                      <div className="absolute inset-x-6 bottom-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="w-12 bg-gradient-to-bl from-gray-700 to-gray-600 relative">
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Shadows */}
              <div
                className="absolute inset-0 shadow-[inset_0_3px_15px_rgba(0,0,0,0.6)] pointer-events-none"
                style={{
                  borderTopLeftRadius: '1.5rem',
                  borderTopRightRadius: '1.5rem',
                  borderBottomLeftRadius: '2rem',
                  borderBottomRightRadius: '2rem',
                }}
              ></div>
              <div className="absolute top-3 left-16 right-16 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
            </div>

            {/* --- RECEIPT (Now comes UNDER the entrance) --- */}
            <div
              className="absolute left-0 right-0 top-full z-10"
              style={{
                transform: `translateY(${initialOffset + (initialOffset * -1 * printProgress) / 100}px)`,
                transition: isPrinting
                  ? 'transform 0.03s linear'
                  : 'transform 0.3s ease-out',
              }}
            >
              <div className="mx-6 bg-white rounded-b-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_-4px_12px_rgba(0,0,0,0.08)] relative">
                {/* Paper texture */}
                <div
                  className="absolute inset-0 rounded-b-2xl opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}
                ></div>

                {/* Paper content */}
                <div className="px-6 pt-4">
                  <h2 className="text-center text-gray-800 font-mono text-sm font-medium mb-2">
                    Trip Invoice – Japan Summer 2025
                  </h2>
                  <div className="border-t-2 border-dashed border-gray-400 w-full mb-4"></div>

                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-lg">Total</span>
                    <span className="text-2xl font-semibold text-gray-900">
                      $30,000
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                    <span className="text-gray-600 text-lg">Per Person</span>
                    <span className="text-2xl font-semibold text-gray-900">
                      $6,000
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {participants.map((p, i) => (
                      <div key={i} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          {p.avatar ? (
                            <img
                              src={p.avatar}
                              alt={p.name}
                              className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                              {p.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-gray-800 font-medium">{p.name}</span>
                        </div>
                        {p.paid ? (
                          <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1.5 rounded-full border border-green-100">
                            <Check className="w-4 h-4" />
                            <span className="text-sm font-medium">Paid</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full border border-orange-100">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">Unpaid</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Printing indicator */}
            {isPrinting && (
              <div className="absolute top-4 right-4 bg-green-500 w-2 h-2 rounded-full animate-pulse shadow-lg z-30"></div>
            )}
          </div>

          {/* Payment section */}
          <div className="px-6 pb-6 pt-[740px]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Payment Method</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-800 font-medium">Visa Ending 2986</span>
                <div className="w-8 h-6 bg-blue-600 rounded"></div>
              </div>
            </div>
            <button className="w-full bg-gray-800 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-colors shadow-md">
              Pay Now
            </button>
          </div>

          {/* Bottom Indicator */}
          <div className="flex justify-center pb-6">
            <div className="w-32 h-1.5 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
{/* 🔻 FOOTER */}
      <footer className="mt-6 text-center text-sm text-gray-500">
        by{' '}
        <a
          href="https://aq-portfolio-rose.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
        >
          Abdulqudus (primyst)
        </a>
      </footer>
    </div>
  )
}