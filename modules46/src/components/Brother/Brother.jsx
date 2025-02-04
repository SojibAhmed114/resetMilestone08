import { useContext } from "react"
import { MoneyContext } from "../grandph/Grandpa"


const Brother = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div className="border p-5 m-5 rounded-xl bg-blue-200">Brother
    <p>{money}</p></div>
  )
}

export default Brother