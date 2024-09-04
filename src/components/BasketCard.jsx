import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../helper/helper";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity, price } = data;
  return (
    <div className="w-full flex items-center justify-between border-2 rounded-2xl p-3 mb-5 ">
      <img className="h-14 w-14 mr-2" src={image} alt={title} />
      <div className="">
        <p className="text-lg w-44">{shortenText(title)}</p>
        <p className="text-lg">{price} $</p>
      </div>
      <div className="flex items-center w-20">
        {quantity === 1 && (
          <button
            className="bg-zinc-600 text-white border-none text-2xl h-8 w-6 leading-8 rounded-lg cursor-pointer"
            onClick={() => clickHandler("REMOVE_ITEM", data)}
          >
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            className="bg-zinc-600 px-1 text-white border-none text-2xl h-8 w-8 leading-8 rounded-lg cursor-pointer"
            onClick={() => clickHandler("DECREASE", data)}
          >
            -
          </button>
        )}
        <span className="w-5 text-center text-xl font-semibold m-2">
          {quantity}
        </span>
        <button
          className="bg-zinc-600 px-1 text-white border-none text-2xl h-8 w-8 leading-8 rounded-lg cursor-pointer "
          onClick={() => clickHandler("INCREASE", data)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
