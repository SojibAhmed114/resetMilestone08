import useCustomInputHookOne from "./UseCustomInputHookOne"
// 01. custom hook return array
const CustomInputHookOne = () => {
  const [name, handleInput] = useCustomInputHookOne();
  const [pass,  handlePass] = useCustomInputHookOne();
  const handleSubmit = e =>{
    e.preventDefault()
    console.log(name)
    console.log(pass)
  }
  return (
    <div className=" p-2">
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="border mb-2 p-2" placeholder="enter your name" type="text" name="" id="" /> <br />
        <input onChange={handlePass} className="border mb-2 p-2" placeholder="enter your password" type="password" name="" id="" /> <br />
        <input className="border mb-2 p-2" type="submit" value="submit" />
      </form>
    </div>
  )
}
export default CustomInputHookOne