import { useEffect, useState } from "react";

interface Props {
  userEmail: any;
}

export function useFormik({
  initialValues,
  validate
}: any) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as Props);
  const [touched, setTouchedFields] = useState({} as Props);

  useEffect(() => {
    console.log("Alguém mexeu nos values", values);
    validateValues(values);
  }, [values])

  function handleChange(event: any) {
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;

    setValues({
      ...values,
      [fieldName]: value,
    })
  }

  function handleBlur(event: any) {
    const fieldName = event.target.getAttribute('name');
    
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }

  function validateValues(values: any) {
    setErrors(validate(values))
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  }
}