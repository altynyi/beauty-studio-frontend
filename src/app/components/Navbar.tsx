import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-semibold text-pink-500">
          Beauty Studio
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-pink-500 transition">Home</Link>
          <Link href="/shop" className="hover:text-pink-500 transition">Shop</Link>
          <Link href="/booking" className="hover:text-pink-500 transition">Booking</Link>
        </nav>
      </div>
    </header>
  );
}