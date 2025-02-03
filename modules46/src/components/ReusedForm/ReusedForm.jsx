import PropTypes from "prop-types"; 

const ReusedForm = ({handleFormData, buttonTitle = "Submit", children}) => {
  const handleSubmitForm = e =>{
    e.preventDefault();
    const data = {
      name: e.target.userNameTwo.value,
      email: e.target.userEmailTwo.value,
      password: e.target.userPasswordTwo.value
    }
    handleFormData(data)
  }
  return (
    <div className="p-5">
        {children}
      <form onSubmit={handleSubmitForm}>
        <input className="border" type="text" name="userNameTwo" /> <br />
        <input className="border" type="email" name="userEmailTwo" /> <br />
        <input className="border" type="password" name="userPasswordTwo" />
        <br />
        <input
          className="border font-bold text-red-500 mt-2 p-2"
          type="submit"
          value={buttonTitle}
        />
      </form>
    </div>
  );
};

ReusedForm.propTypes = {
  buttonTitle: PropTypes.string,
  handleFormData: PropTypes.func.isRequired,
  children: PropTypes.object
};

export default ReusedForm;
