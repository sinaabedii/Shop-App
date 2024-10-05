import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="mx-auto flex justify-center items-center text-center "
      style={{ width: "100%", marginTop: "100px", height: "1000px" }}
    >
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="gray"
      />
    </div>
  );
}

export default Loader;
