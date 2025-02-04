import { createContext, useState } from "react"
import Aunty from "../Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"

export const AssetContext = createContext();
export const MoneyContext = createContext(1000);


const Grandpa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "Banana";
  return (
    <div className="border rounded-xl bg-pink-200">
      <p className="text-center">grandpa</p>
      <p className="text-center">total Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value={"gold"}>
          <section className="flex gap-5">
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
}

export default Grandpa