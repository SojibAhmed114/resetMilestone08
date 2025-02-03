import Cousin from "./Cousin/Cousin"


const Aunty = () => {
  return (
    <div className="border p-5 m-5 rounded-xl bg-purple-200">
      <p className="text-center">Aunty</p>
      <section className="flex">
        <Cousin name={"Rubel"}/>
        <Cousin name={"Raj"}/>
      </section>
      </div>
  )
}

export default Aunty