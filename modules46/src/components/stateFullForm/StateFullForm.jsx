import { useState } from "react"

const StateFullForm = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const [formError, setFormError] = useState("");

  const handleSubmitForm = e =>{
    e.preventDefault();
    // password validate using ternary operator
    // userPassword.length < 6 ?  setFormError("password is too short") : setFormError(""); console.log(userName, userEmail, userPassword);
    // password validate using if else
    if(userPassword.length < 6){
      setFormError("password is too short");
    }
    else{
      setFormError("");
      console.log(userName, userEmail, userPassword);
    }
  }

  const inputOnChangeUserName = e =>{
    setUserName(e.target.value);
  }
  const inputOnChangeUserEmail = e =>{
    setUserEmail(e.target.value);
  }
  const inputOnChangeUserPassword = e =>{
    setUserPassword(e.target.value);
  }

  return (
    <div className="p-5">
      <h2 className="font-myFont text-2xl text-myCustomColor">tailwind css 4 custom font and color</h2>
      <form onSubmit={handleSubmitForm}>
        <input onChange={inputOnChangeUserName} className="border" type="text" name="userNameTwo"/> <br />
        <input onChange={inputOnChangeUserEmail} className="border" type="email" name="userEmailTwo"/> <br />
        <input onChange={inputOnChangeUserPassword} className="border" type="password" name="userPasswordTwo"/> <br />
        {
          formError && <p className="text-rose-500">{formError}</p>
        }
        <input className="border font-bold text-red-500 mt-2 p-2" type="submit"/> <br />
      </form>
    </div>
  )
}

export default StateFullForm
