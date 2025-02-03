import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (nameRef.current) {
        nameRef.current.focus();
        nameRef.current.select(); // Ensures cursor is visible
      }
    }, 100);
  }, []);


  const handleOnSubmitEvent = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm"
        onSubmit={handleOnSubmitEvent}>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Ref Form</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            name="userName"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 caret-black"  />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            ref={emailRef}
            defaultValue="sojib@gmail.com"
            type="email"
            name="userEmail"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 caret-black" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            ref={passRef}
            type="password"
            name="pass"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 caret-black" />
        </div>

        <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300" >
          Submit </button>
      </form>
    </div>
  );
};

export default RefForm;
