// import SimpleForm from "./components/simpleForm/SimpleForm"
 // import RefFrom from "./components/RefForm/RefFrom";
// import StateFullForm from "./components/stateFullForm/StateFullForm";
// import Recap from "./Recap/Recap";
// import RecapTwo from "./Recap/RecapTwo";
// import CustomHooksForm from "./components/CustomHooksForm/CustomHooksForm";
// import CustomInputHookOne from "./components/Recap/CustomInputHookOne";
// import CustomInputHookTwo from "./components/Recap/CustomInputHookTwo";
// import ReusedForm from "./components/ReusedForm/ReusedForm";

import Grandpa from "./components/grandph/Grandpa";


function App() {

  // const handleFormDataOne = data =>{
  //   console.log(data);
  // }
  // const handleFormDataTwo = data =>{
  //   console.log(data)
  // }
  
  return (
    <>
      <div className=" bg-gray-100 mt-5 p-10">
        {/* <SimpleForm /> */}
        {/* <StateFullForm/> */}
        {/* <Recap/> */}
        {/* <RecapTwo/> */}
        {/* <RefFrom/> */}
        {/* <CustomHooksForm/> */}
        {/* <CustomInputHookOne/> */}
        {/* <CustomInputHookTwo/> */}
        {/* <ReusedForm handleFormData={handleFormDataOne}>
          <div> 
            <h2>Sign up</h2>
            <p>Please sign up right now</p>
          </div> 
        </ReusedForm>
        <ReusedForm handleFormData={handleFormDataTwo} buttonTitle={"Update"} >
          <div> 
            <h2> Update Profile </h2>
            <p> Always keep your profile updated </p>
          </div> 
        </ReusedForm> */}
        <Grandpa/>
      </div>
    </>
  );
}

export default App
