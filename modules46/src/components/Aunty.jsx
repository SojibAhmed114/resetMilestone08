import { useContext } from "react"
import Cousin from "./Cousin/Cousin"
import { MoneyContext } from "./grandph/Grandpa"


const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border p-5 m-5 rounded-xl bg-purple-200">
      <p className="text-center">Aunty</p>
      <section className="flex">
        <Cousin name={"Rubel"}/>
        <Cousin name={"Raj"}/>
      </section>
      <section>
      <p>money: {money}</p>
      <button onClick={()=> setMoney(money + 1000)} className=" px-2 border  bg-cyan-200 cursor-pointer">Add 1000 tk</button>
      </section>
      </div>
  )
}

export default Aunty