import { useState } from "react";
// js file
// 02. custom hook return object
const useCustomInputHookOne = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };
  // return [value, handleOnchange]; // array return korte caile
  return { value, handleOnchange };
}; 
export default useCustomInputHookOne;
