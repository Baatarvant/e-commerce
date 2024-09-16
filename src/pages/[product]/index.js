import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "../../helpers";
import { Card, CardSkeleton } from "../../components";
import { useQueryState } from "nuqs";

export const ProductPage = () => {
  const router = useRouter();
  const { product } = router.query;
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products/category/${product}`, fetcher);

  const [search] = useQueryState("search");

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="container grid min-h-screen grid-cols-3 gap-4 mx-auto mt-20">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <CardSkeleton key={index} />
          ))}
      </div>
    );

  const filteredProducts = products.filter((product) => {
    if (!search) return true;
    return product.title.toLowerCase().includes(search?.toLowerCase());
  });

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-3 gap-4 place-items-center gap-y-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default ProductPage;
