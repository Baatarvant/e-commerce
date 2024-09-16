import { useRouter } from "next/router";
import useSWR from "swr";
import { moneyFormatter } from "../../../utils";
import { ProductRating, ProductSkeleton } from "../../../components";
import { useCart } from "../../../providers";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`https://fakestoreapi.com/products/${productId}`, fetcher);

  const { addToCart } = useCart();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <ProductSkeleton />;

  const { price, image, rating, title, description } = product;

  const money = moneyFormatter(price);

  const addCardHandler = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex shadow-xl card lg:card-side bg-base-100">
        <div className="w-[700px] py-10">
          <img
            src={image}
            width={300}
            height={300}
            className="mx-auto"
            alt={title}
          />
        </div>
        <div className="flex-1 bg-gray-100 card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="my-2 card-actions">
            <p className="justify-end">{money}</p>
            <div className="flex items-center gap-2">
              <p>ratings: {rating.count}</p>
              <ProductRating rating={rating.rate} />
            </div>
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary" onClick={addCardHandler}>
              Add card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
