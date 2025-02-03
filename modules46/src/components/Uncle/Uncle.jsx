import Cousin from "../Cousin/Cousin"


const Uncle = ({ asset }) => {
  return (
    <div className="border p-5 m-5 rounded-xl bg-purple-200">
      <p className="text-center">Uncle</p>
      <section className="flex">
        <Cousin name={"karun"} asset={asset} />
        <Cousin name={"alomgir"} />
      </section>
    </div>
  );
};

export default Uncle