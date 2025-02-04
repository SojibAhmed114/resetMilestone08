import { useContext } from "react";
import { AssetContext } from "../grandph/Grandpa";


const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div className="border p-5 rounded-xl">
      <p>Special</p>
      <p>{asset}</p>
      <p>{gift}</p>
    </div>
  );
};

export default Special