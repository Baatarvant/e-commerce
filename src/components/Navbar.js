import useSWR from "swr";
import { fetcher } from "@/helpers";
import Link from "next/link";
import { SearchIcon } from "./icons";
import { NavbarSkeleton } from "./skeleton";
import { useCart } from "../providers";
import { PiShoppingCartLight } from "react-icons/pi";
import { useQueryState } from "nuqs";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useCart();
  const {
    data: categories,
    error,
    isLoading,
  } = useSWR("https://fakestoreapi.com/products/categories", fetcher);

  const [search, setSearch] = useQueryState("search");

  if (error) return <div className="mx-auto contaier">failed to load</div>;
  if (isLoading) return <NavbarSkeleton />;

  const cardItemsCount = [...cartItems].reduce(
    (acc, curr) => (acc = acc + curr.quantity),
    0
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const hideHeaderOn = ["/[product]/[productId]"];
  const shouldHideHeader = hideHeaderOn.includes(router.pathname);

  return (
    <div className="container flex justify-between mx-auto navbar bg-base-100">
      <div>
        <Link className="px-4 py-2 text-xl font-bold cursor-pointer" href="/">
          Store
        </Link>
        <div className="flex gap-4">
          {categories.map((category, index) => (
            <Link
              href={`/${category}`}
              key={index}
              className="text-lg cursor-pointer hover:text-primary"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {!shouldHideHeader && (
          <label className="flex items-center gap-2 input input-bordered">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
            <SearchIcon />
          </label>
        )}

        <button class="btn">
          <PiShoppingCartLight size={30} />
          {cartItems.length > 0 && (
            <div class="badge badge-primary">{cardItemsCount}</div>
          )}
        </button>
      </div>
    </div>
  );
};
