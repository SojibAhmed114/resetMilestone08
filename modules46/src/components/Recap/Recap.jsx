
const Recap = () => {
  const handleInputText = e =>{
    e.preventDefault()
    console.log(e.target.name.value);
    console.log(e.target.email.value)
    console.log(e.target.pass.value)
  }
  return (
    <div>
      <form onSubmit={handleInputText}>
        <input className="border m-2 p-2" type="text" name="name" id="" placeholder="enter your name"/> <br />
        <input className="border m-2 p-2" type="email" name="email" id="" placeholder="enter your email"/><br />
        <input className="border m-2 p-2" type="password" name="pass" id="" placeholder="enter your password"/> <br />
        <input className="border m-2 p-2" type="submit" name="" id="" />
      </form>
    </div>
  )
}

export default Recap