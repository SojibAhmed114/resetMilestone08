
const SimpleForm = () => {

  const handleOnSubmitEvent = e =>{
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log(e.target.userEmail.value);
    console.log(e.target.phone.value);
  }
  return (
    <div className="m-5">
      <p className="text-red-500">user form</p>
      <form className="text-green-600" onSubmit={handleOnSubmitEvent}>
        <input className="border" type="text" name="userName" /> <br />
        <input className="border" type="email" name="userEmail" /> <br />
        <input className="border" type="text" name="phone" id="" /> <br />
        <input
          className="p-2 bg-green-100 rounded-md border mt-2"
          type="submit"
          value="sent"
        />
      </form>
    </div>
  );
}

export default SimpleForm
