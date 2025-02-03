import useCustomInputHookOne from "./UseCustomInputHookOne";
// output pacchi na
// 02
const CustomInputHookTwo = () => {
  const nameState = useCustomInputHookOne();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState.value);
  };
  return (
    <div className=" p-2">
      <form onSubmit={handleSubmit}>
        <input {...nameState} className="border mb-2 p-2" placeholder="enter your name" type="text" name="" id="" /> <br />
        <input className="border mb-2 p-2" placeholder="enter your password" type="password" name="" id="pass" /> <br />
        <input className="border mb-2 p-2" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default CustomInputHookTwo

