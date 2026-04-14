type ProductCardProps = {
  name: string;
  description?: string;
  price: number;
};

export default function ProductCard({
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-5">
      <div className="rounded-2xl bg-pink-50 h-48 mb-4 flex items-center justify-center text-pink-300">
        Product Image
      </div>

      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-gray-600 mt-2 min-h-[40px]">
        {description || 'Beauty product for your daily care routine.'}
      </p>

      <div className="flex items-center justify-between mt-5">
        <span className="text-pink-500 font-bold">${price}</span>
        <button className="bg-pink-400 hover:bg-pink-500 text-white rounded-2xl px-5 py-3 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}