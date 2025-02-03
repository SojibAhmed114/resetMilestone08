import Aunty from "../Aunty"
import Dad from "../Dad/Dad"
import Uncle from "../Uncle/Uncle"


const Grandpa = () => {
  const asset = "Banana";
  return (
    <div className="border rounded-xl bg-pink-200">
      <p className="text-center">grandpa</p>
      <section className="flex gap-5">
        <Dad asset={asset} />
        <Uncle asset={asset} />
        <Aunty />
      </section>
    </div>
  );
}

export default Grandpa