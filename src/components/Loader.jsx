import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="items-center mx-auto text-center">
      <RotatingLines strokeColor="black"  />
    </div>
  );
}

export default Loader;
