import { useFormik } from "../../hooks/useFormik";
import { ErrorMessage } from "../ErrorMessage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input, Wrapper } from "./styled";

interface NewsButtonProps {
  userEmail: string;
}

export function Newsletter() {
  const notify = (message: any) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const formik = useFormik({
    initialValues: {
      userEmail: '',
    },
    validate: function (values: any) {
      const errors = {} as NewsButtonProps;

      if(!validateEmail(values.userEmail)) {
        errors.userEmail = "Por favor, insira um email válido.";
      }

      function validateEmail(email: any) {
        let rgx = /\S+@\S+\.\S+/;

        return rgx.test(email);
      }

      return errors;
    }
  });

  return (
    <>
      <Wrapper onSubmit={(event) => {
        event.preventDefault();
        console.log(formik.values);
        notify("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " + formik.values.userEmail)
      }}>
        <Input 
          as={"input"} 
          placeholder={"Insira seu e-mail"} 
          type={"text"}
          name={"userEmail"}
          id={"userEmail"}
          value={formik.values.userEmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button
         type="submit"      
         disabled={formik.errors.userEmail || !formik.values.userEmail}
         active={formik.errors.userEmail || !formik.values.userEmail}
        >Assinar newsletter</Button>
      </Wrapper>
      {formik.touched.userEmail && formik.errors.userEmail && <ErrorMessage text={formik.errors.userEmail} />}
      <ToastContainer
        theme={"light"}
      />
    </>
  );
}