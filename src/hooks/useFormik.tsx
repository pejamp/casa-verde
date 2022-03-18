import { useState } from "react";

export function useFormik({
  initialValues
}: any) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event: any) {
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;

    setValues({
      ...values,
      [fieldName]: value,
    })
  }

  return {
    values: values,
    handleChange
  }
}