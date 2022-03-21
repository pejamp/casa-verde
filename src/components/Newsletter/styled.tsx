import styled from "styled-components";
import { useFormik } from "../../hooks/useFormik";
import { ErrorMessage } from "../ErrorMessage/styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.form`
  display: flex;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  background-color: #FFFFFF;
  position: relative;
  margin-top: 2.375rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(/assets/mail.svg);
    background-repeat: no-repeat;
    background-position: center;
  } 
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 28px 0;
  padding-left: 3.437rem;
`;

interface ButtonProps {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  max-width: 194px;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #FFFFFF;
  background-color: ${({ active }) => active ? "#90909f" :  "#FFCB47"};
  box-shadow: 10px 10px 30px  ${({ active }) => active ? `rgba(25, 25, 25, 0.3)` :  `rgba(255, 203, 71, 0.3)`};
`;

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
      {formik.touched.userEmail && formik.errors.userEmail && <ErrorMessage>{formik.errors.userEmail}</ErrorMessage>}
      <ToastContainer
        theme={"light"}
      />
    </>
  );
}