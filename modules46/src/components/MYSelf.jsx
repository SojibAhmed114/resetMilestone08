import Special from "./Special/Special"

const MYSelf = ({ asset }) => {
  return (
    <div className="border p-5 m-5 rounded-xl bg-blue-200">
      MySelf
      <section className="flex">
        <Special asset={asset} />
      </section>
    </div>
  );
};

export default MYSelf