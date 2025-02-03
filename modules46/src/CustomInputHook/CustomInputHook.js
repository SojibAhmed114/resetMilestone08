import { useState } from "react"

const useCustomInput = (defaultValues = null) =>{
  const [value, setValue] = useState(defaultValues);
  const onChange = e =>{
    setValue(e.target.value);
  }
  return {
    value,
    onChange
  }
}

export default useCustomInput