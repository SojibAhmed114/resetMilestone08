import { useContext } from "react"
import { AssetContext } from "../grandph/Grandpa"


const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div  className="border p-5 m-5 rounded-xl bg-amber-200">
      <p>Friend</p>
      <p>{gift}</p>
    </div>
  )
}

export default Friend