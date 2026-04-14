'use client';

import { useState } from 'react';
import { createAppointment } from '@/lib/api';

type BookingFormProps = {
  services: {
    id: number;
    title: string;
    durationMin: number;
    price: number;
  }[];
};

const mockTimes = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];

export default function BookingForm({ services }: BookingFormProps) {
  const [serviceId, setServiceId] = useState<number | ''>('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async () => {
    try {
      setMessage('');

      if (!serviceId || !date || !time) {
        setMessage('Please select service, date and time');
        return;
      }

      const appointmentAt = new Date(`${date}T${time}:00`).toISOString();

      const clientId = 1;
      const token = localStorage.getItem('token') || '';

      if (!token) {
        setMessage('Please login first');
        return;
      }

      await createAppointment({
        clientId,
        serviceId: Number(serviceId),
        appointmentAt,
        note,
        token,
      });

      setMessage('Appointment booked successfully');
      setServiceId('');
      setDate('');
      setTime('');
      setNote('');
    } catch (error: any) {
      setMessage(error.message || 'Booking failed');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Your Appointment</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">1. Choose service</label>
          <select
            value={serviceId}
            onChange={(e) => setServiceId(Number(e.target.value))}
            className="w-full border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-200"
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title} — ${service.price} / {service.durationMin} min
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">2. Choose date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">3. Choose time</label>
          <div className="grid grid-cols-3 gap-3">
            {mockTimes.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`rounded-2xl py-3 border transition ${
                  time === slot
                    ? 'bg-pink-400 text-white border-pink-400'
                    : 'border-pink-200 text-gray-700 hover:bg-pink-50'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            className="w-full border border-pink-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-200"
            placeholder="Any preference or request..."
          />
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-2xl px-5 py-3 transition"
        >
          Confirm Booking
        </button>

        {message && (
          <p className="text-sm text-center text-pink-500 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}