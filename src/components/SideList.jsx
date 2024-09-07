import { shortenText } from "../helper/helper";

function SideList({ data: { image, price, title } }) {
  return (
    <div className="flex bg-slate-300 mb-1 w-full my-1 mx- px-2 py-1 rounded-xl items-center gap-3">
      <img className="w-12 h-12 bg-transparent" src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <h2 className="bg-red-300 px-2 rounded-xl">{price} $</h2>
    </div>
  );
}

export default SideList;
