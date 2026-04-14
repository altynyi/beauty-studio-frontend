import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import { getTopServices } from '@/lib/api';

export default async function HomePage() {
  const services = await getTopServices();

  return (
    <>
      <HeroBanner />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-pink-500 font-medium mb-2">Top Services</p>
            <h2 className="text-3xl font-bold">Most loved by our clients</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service: any) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                price={Number(service.price)}
                durationMin={service.durationMin}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}