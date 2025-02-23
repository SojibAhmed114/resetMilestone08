import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousin = ({ name, asset }) => {
  return (
    <div className="border p-5 m-5 rounded-xl bg-blue-200">
      <p>Cousin</p>
      <p>{name}</p>
      <Special asset={asset} />
      {name === "Raj" && <Friend/>}
    </div>
  );
};

export default Cousin