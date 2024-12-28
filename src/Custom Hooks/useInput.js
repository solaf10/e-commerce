import { useState } from "react";

const useInput = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (domObj) => {
    const { name, value } = domObj;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(formData);
  return [formData, handleChange];
};

export default useInput;
