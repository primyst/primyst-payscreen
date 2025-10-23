'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Participant {
  name: string;
  status: 'paid' | 'unpaid';
  avatar: string;
  color: string;
}

export default function PaymentStatus() {
  const [paymentMethod, setPaymentMethod] = useState<string>('Visa Ending 2986');

  const participants: Participant[] = [
    { name: 'You', status: 'paid', avatar: 'you.png', color: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
    { name: 'Olabode', status: 'paid', avatar: 'olabode.png', color: 'bg-gradient-to-r from-green-500 to-teal-600' },
    { name: 'Lukmon', status: 'paid', avatar: 'lukmon.png', color: 'bg-gradient-to-r from-purple-500 to-pink-600' },
    { name: 'Hope', status: 'unpaid', avatar: 'hope.png', color: 'bg-gradient-to-r from-orange-500 to-red-600' },
    { name: 'Dara', status: 'unpaid', avatar: 'dara.png', color: 'bg-gradient-to-r from-indigo-500 to-purple-600' },
  ];

  const getStatusColor = (status: Participant['status']): string => {
    return status === 'paid' ? 'bg-emerald-500' : 'bg-amber-500';
  };

  const getStatusTextColor = (status: Participant['status']): string => {
    return status === 'paid' ? 'text-emerald-700' : 'text-amber-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button 
            type="button"
            className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20 hover:shadow-md transition-shadow"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">LO</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Lukmon Olabode Ilebiyi</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">9:41</p>
            <p className="text-sm text-gray-500">Wed, Oct 22</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Payment Status</h1>
          <button 
            type="button"
            className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-white/20 hover:shadow-md transition-shadow"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l2 2 4-4" />
            </svg>
          </button>
        </div>

        {/* Invoice Card */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-900 to-slate-800/90 text-white px-6 py-4 rounded-xl -mx-6 -mt-6 mb-6">
            <h2 className="text-lg font-semibold">Trip Invoice – Japan Summer 2025</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-gray-900 font-semibold">Total</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">$30,000</p>
            </div>
            <div className="text-right">
              <p className="text-gray-900 font-semibold">Per Person</p>
              <p className="text-2xl font-bold text-emerald-600 mt-1">$6,000</p>
            </div>
          </div>
        </div>

        {/* Participants List */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Participants</h3>
          <div className="space-y-4">
            {participants.map((participant: Participant, index: number) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/30">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ${participant.color}`}>
                    <Image
                      src={participant.avatar}
                      alt={participant.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-900">{participant.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${getStatusColor(
                      participant.status
                    )}`}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`font-medium px-3 py-1 rounded-full text-sm ${getStatusTextColor(
                      participant.status
                    )} bg-white/60`}
                  >
                    {participant.status === 'paid' ? 'Paid' : 'Unpaid'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Status Bar */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 mb-8 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Payment Status</h3>
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-700 font-semibold rounded-full border border-amber-500/30">
              UNPAID
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 rounded-full p-1 border border-white/30">
            <div className="w-12/24 h-3 bg-emerald-500 rounded-full"></div>
            <div className="w-0/24 h-3 bg-emerald-500/30 rounded-full"></div>
            <div className="w-12/24 h-3 bg-emerald-500 rounded-full"></div>
            <div className="w-0/24 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-0/24 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex items-center justify-end space-x-4 mt-4">
            <button 
              type="button"
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white/60 rounded-xl border border-white/30 hover:bg-white/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Send Reminder</span>
            </button>
            <button 
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white/60 rounded-xl border border-white/30 hover:bg-white/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pay Now Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Payment Method</span>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">{paymentMethod}</span>
            </div>
          </div>
          <button 
            type="button"
            className="w-full bg-gradient-to-r from-gray-900 to-slate-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
        }
