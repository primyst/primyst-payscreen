'use client'

import React from 'react'
import { ArrowLeft, Share2, Check, Clock, Receipt } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PaymentStatus() {
  const participants = [
    { name: 'You', avatar: 'you.png', paid: true },
    { name: 'Olabode', avatar: 'ola.png', paid: true },
    { name: 'Lukmon', avatar: 'lukeman.png', paid: true },
    { name: 'Hope', avatar: 'hope.png', paid: false },
    { name: 'Dara', avatar: 'dara.png', paid: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Payment Status</h1>
          <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full">
            <Share2 className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Receipt Machine Top */}
        <div className="mx-6 mb-6 relative">
          <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-t-3xl pt-8 px-6 pb-4 shadow-[0_6px_16px_rgba(0,0,0,0.4)] relative">
            {/* Slot */}
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 rounded-xl px-1 py-1 shadow-[inset_0_4px_8px_rgba(0,0,0,0.9)] overflow-hidden relative">
              <div className="bg-gray-900 h-6 rounded-lg"></div>

              {/* Dark top overlay for depth */}
              <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Animated Receipt (comes out like POS) */}
          <motion.div
            initial={{ y: -250, opacity: 0.6, scaleY: 0.9 }}
            animate={{ y: 0, opacity: 1, scaleY: 1 }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 12,
              delay: 0.3,
            }}
            className="bg-white -mt-5 rounded-b-3xl relative shadow-[0_-6px_10px_-2px_rgba(0,0,0,0.15),0_6px_20px_rgba(0,0,0,0.1),inset_0_1px_3px_rgba(0,0,0,0.05)]"
          >
            {/* Receipt Header */}
            <div className="px-6 pt-3 pb-4 border-b border-gray-200">
              <h2 className="text-center text-gray-800 font-mono text-sm font-medium mb-2">
                Trip Invoice – Japan Summer 2025
              </h2>
              <div className="flex justify-center">
                <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
              </div>
            </div>

            {/* Receipt Body */}
            <div className="px-6">
              {/* Totals */}
              <div className="flex justify-between items-center mb-2 pt-4">
                <span className="text-gray-600 text-lg">Total</span>
                <span className="text-2xl font-semibold text-gray-900">$30,000</span>
              </div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <span className="text-gray-600 text-lg">Per Person</span>
                <span className="text-2xl font-semibold text-gray-900">$6,000</span>
              </div>

              {/* Participants */}
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
                      <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1.5 rounded-full">
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">Paid</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Unpaid</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Payment Progress */}
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700 font-medium">Payment Status</span>
                  <span className="text-xl font-bold text-gray-800">UNPAID</span>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
                  <Receipt className="w-5 h-5 text-gray-400 ml-2" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pb-6">
                <button className="flex-1 bg-gray-800 text-white py-3.5 rounded-xl font-medium hover:bg-gray-900 transition-colors">
                  Send Reminder
                </button>
                <button className="flex-1 bg-white text-gray-800 py-3.5 rounded-xl font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  Download Invoice
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Method */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Payment Method</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-medium">Visa Ending 2986</span>
              <div className="w-8 h-6 bg-blue-500 rounded-md shadow-sm"></div>
            </div>
          </div>

          <button className="w-full bg-gray-800 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-gray-900 transition-colors">
            Pay Now
          </button>
        </div>

        {/* Bottom Indicator */}
        <div className="flex justify-center pb-6">
          <div className="w-32 h-1.5 bg-gray-800 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}