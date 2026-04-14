import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center py-16">
        <div>
          <p className="text-pink-500 font-medium mb-3">Soft Pink Minimalism</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Beauty services and cosmetics in one elegant platform
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Book appointments online, discover top beauty services, and shop your
            favorite cosmetics in a calm, aesthetic experience.
          </p>

          <div className="flex gap-4">
            <Link href="/booking" className="bg-pink-400 hover:bg-pink-500 text-white rounded-2xl px-5 py-3 transition">
              Book Now
            </Link>
            <Link href="/shop" className="border border-pink-200 text-pink-500 hover:bg-pink-50 rounded-2xl px-5 py-3 transition">
              Visit Shop
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-4">
          <div className="rounded-2xl bg-gradient-to-br from-pink-100 to-white h-[360px] flex items-center justify-center text-pink-300 text-lg">
            Beauty Banner Image
          </div>
        </div>
      </div>
    </section>
  );
}