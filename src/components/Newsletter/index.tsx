
import { useFormik } from "../../hooks/useFormik";
import { ErrorMessage } from "../ErrorMessage";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input, Form } from "./styled";

interface NewsButtonProps {
  userEmail: string;
}

const apikey = {
  template: import.meta.env.VITE_TEMPLATE_ID,
  user: import.meta.env.VITE_USER_ID,
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

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const { userEmail } = formik.values;

    emailjs.sendForm('service_n2lt8yr', `${apikey.template}`, event.target, `${apikey.user}`)
      .then((result) => {
          if (result.status == 200) {
            notify("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " + userEmail);
          };
      }, (error) => {
          notify(error.text);
      });

    
    console.log(userEmail);

    event.target.reset();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
      </Form>
      {formik.touched.userEmail && formik.errors.userEmail && <ErrorMessage text={formik.errors.userEmail} />}
      <ToastContainer
        theme={"light"}
      />
    </>
  );
}