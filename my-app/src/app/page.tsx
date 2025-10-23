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

  const receiptHeight = 680
  const initialOffset = -receiptHeight + 40

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Payment Status</h1>
          <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Receipt Machine */}
        <div className="mx-6 mb-6 relative">
          {/* Curved Machine Body */}
          <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-[2rem] pt-8 px-6 pb-5 shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_-2px_8px_rgba(0,0,0,0.3)]">
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] pointer-events-none"></div>
            
            {/* Subtle highlights */}
            <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
            
            {/* Card Slot Opening - with curved edges */}
            <div className="relative bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600 rounded-[1.2rem] px-2 py-2 shadow-[inset_0_6px_15px_rgba(0,0,0,0.7),inset_0_-2px_6px_rgba(255,255,255,0.08)] overflow-hidden">
              {/* Slot interior */}
              <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 h-8 rounded-[1rem] relative overflow-hidden">
                {/* Inner slot shadows */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gray-600/30 to-transparent"></div>
                
                {/* Light reflection bar at bottom edge - simulating light bouncing off paper */}
                <div className="absolute inset-x-3 bottom-0.5 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[1px]"></div>
                <div className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>

              {/* Softer top shadow */}
              <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
              
              {/* Enhanced bottom glow where paper emerges */}
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white/12 via-white/6 to-transparent pointer-events-none"></div>
              
              {/* Rim light on inner edges */}
              <div className="absolute inset-x-2 bottom-2 h-3 border-b border-white/10 rounded-b-xl pointer-events-none"></div>
            </div>

            {/* Subtle panel lines */}
            <div className="absolute left-8 right-8 top-3 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            {/* Machine top shadow */}
            <div className="absolute inset-x-0 -top-1 h-3 bg-black/30 blur-md rounded-t-[2rem]"></div>
          </div>

          {/* Animated Receipt Paper */}
          <div 
            className="relative -mt-4 z-10"
            style={{
              transform: `translateY(${initialOffset + (initialOffset * -1 * printProgress / 100)}px)`,
              transition: isPrinting ? 'transform 0.03s linear' : 'transform 0.3s ease-out',
            }}
          >
            <div className="bg-white rounded-b-[1.5rem] shadow-[0_-8px_12px_-4px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(0,0,0,0.04)] relative">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 rounded-b-[1.5rem] opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`
              }}></div>
              
              {/* Top edge shadow from machine */}
              <div className="absolute -top-2 inset-x-0 h-4 bg-gradient-to-b from-black/20 via-black/5 to-transparent pointer-events-none"></div>
              
              {/* Paper sides shadow */}
              <div className="absolute -left-1 top-0 bottom-0 w-2 bg-gradient-to-r from-black/10 to-transparent rounded-l-[1.5rem] pointer-events-none"></div>
              <div className="absolute -right-1 top-0 bottom-0 w-2 bg-gradient-to-l from-black/10 to-transparent rounded-r-[1.5rem] pointer-events-none"></div>

              {/* Receipt Header */}
              <div className="px-6 pt-4 pb-4 border-b border-gray-200">
                <h2 className="text-center text-gray-800 font-mono text-sm font-medium mb-2 tracking-tight">
                  Trip Invoice – Japan Summer 2025
                </h2>
                <div className="flex justify-center">
                  <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
                </div>
              </div>

              {/* Receipt Body */}
              <div className="px-6">
                <div className="flex justify-between items-center mb-2 pt-4">
                  <span className="text-gray-600 text-lg">Total</span>
                  <span className="text-2xl font-semibold text-gray-900">$30,000</span>
                </div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <span className="text-gray-600 text-lg">Per Person</span>
                  <span className="text-2xl font-semibold text-gray-900">$6,000</span>
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
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium shadow-sm">
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

                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-medium">Payment Status</span>
                    <span className="text-xl font-bold text-gray-800">UNPAID</span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-800"></div>
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-800"></div>
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-800"></div>
                    <div className="w-7 h-7 bg-gray-800 rounded-full shadow-sm"></div>
                    <Receipt className="w-5 h-5 text-gray-400 ml-2" />
                  </div>
                </div>

                <div className="flex gap-3 pb-6">
                  <button className="flex-1 bg-gray-800 text-white py-3.5 rounded-xl font-medium hover:bg-gray-900 transition-colors shadow-sm">
                    Send Reminder
                  </button>
                  <button className="flex-1 bg-white text-gray-800 py-3.5 rounded-xl font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Printing indicator */}
          {isPrinting && (
            <div className="absolute top-4 right-4 bg-green-500 w-2 h-2 rounded-full animate-pulse shadow-lg"></div>
          )}
        </div>

        {/* Payment Method */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Payment Method</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-medium">Visa Ending 2986</span>
              <div className="w-8 h-6 bg-blue-600 rounded shadow-sm"></div>
            </div>
          </div>

          <button className="w-full bg-gray-800 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg">
            Pay Now
          </button>
        </div>

        <div className="flex justify-center pb-6">
          <div className="w-32 h-1.5 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}