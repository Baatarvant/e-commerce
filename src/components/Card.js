import { useRouter } from "next/router";
import { moneyFormatter } from "../utils";

export const Card = (props) => {
  const { id, title, price, description, category, image } = props;
  const router = useRouter();

  const money = moneyFormatter(price);
  const formattedDescription = description.split(" ").slice(0, 10).join(" ");

  const handleClick = () => {
    router.push(`/${category}/${id}`);
  };

  return (
    <div
      className="shadow-xl cursor-pointer card bg-base-100 w-[384px] h-[500px]"
      onClick={handleClick}
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{formattedDescription}</p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{money}</div>
        </div>
      </div>
    </div>
  );
};
