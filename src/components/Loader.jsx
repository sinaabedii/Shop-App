import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="flex justify-center"
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
