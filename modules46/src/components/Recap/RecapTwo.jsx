import { useState } from "react";

const RecapTwo = () => {
  const [inputName, setInputName] = useState(null);
  const [inputPass, setInputPass] = useState(null)
  const handleInputText = e =>{
    e.preventDefault();
    console.log(inputName)
    console.log(inputPass)
  }

  const handleInputOnChange = e =>{
    setInputName(e.target.value)
  }
  const handleInputPassOnchange = e =>{
    setInputPass(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleInputText}>
        <input onChange={handleInputOnChange} className="border m-2 p-2" type="text" name="name" id="" placeholder="enter your name"/> <br />
        <input onInput={handleInputPassOnchange} className="border m-2 p-2" type="password" name="pass" id="" placeholder="enter your password"/> <br />
        <input className="border m-2 p-2" type="submit" name="" id="" />
      </form>
    </div>
  )
}

export default RecapTwo
