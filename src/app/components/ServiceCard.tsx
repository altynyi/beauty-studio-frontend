type ServiceCardProps = {
  title: string;
  description?: string;
  price: number;
  durationMin: number;
};

export default function ServiceCard({
  title,
  description,
  price,
  durationMin,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
      <div className="w-12 h-12 rounded-2xl bg-pink-100 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {description || 'Premium care with a minimal and elegant experience.'}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-pink-500 font-semibold">${price}</span>
        <span className="text-sm text-gray-500">{durationMin} min</span>
      </div>
    </div>
  );
}