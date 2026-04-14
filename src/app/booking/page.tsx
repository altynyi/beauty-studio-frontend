import BookingForm from '@/components/BookingForm';
import { getAllServices } from '@/lib/api';

export default async function BookingPage() {
  const services = await getAllServices();

  const mappedServices = services.map((service: any) => ({
    id: service.id,
    title: service.title,
    durationMin: service.durationMin,
    price: Number(service.price),
  }));

  return (
    <section className="py-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-pink-500 font-medium mb-2">Appointment</p>
          <h1 className="text-3xl font-bold">Choose service, time and confirm</h1>
        </div>

        <BookingForm services={mappedServices} />
      </div>
    </section>
  );
}