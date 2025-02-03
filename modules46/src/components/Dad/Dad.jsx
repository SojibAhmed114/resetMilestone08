import Brother from "../Brother/Brother"
import MYSelf from "../MYSelf"
import Sister from "../Sister/Sister"


const Dad = ({ asset }) => {
  return (
    <div className="border p-5 m-5 rounded-xl bg-purple-200">
      <p className="text-center">Dad</p>
      <section className="flex">
        <MYSelf asset={asset} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Dad