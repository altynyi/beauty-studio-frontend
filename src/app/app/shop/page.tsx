import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <section className="py-16 bg-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-pink-500 font-medium mb-2">Beauty Shop</p>
          <h1 className="text-3xl font-bold">Cosmetics Collection</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={Number(product.price)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}