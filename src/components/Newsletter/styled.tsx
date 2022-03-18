import styled from "styled-components";
import { useFormik } from "../../hooks/useFormik";

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

const Button = styled.button`
  max-width: 194px;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #FFFFFF;
  background-color: #FFCB47;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
`;

interface NewsButtonProps {
}

export function Newsletter(props: NewsButtonProps) {
  const formik = useFormik({
    initialValues: {
      userEmail: 'email@email.com',
    }
  });

  return (
    <Wrapper onSubmit={(event) => {
      event.preventDefault();
      console.log(formik.values);
    }}>
      <Input 
        as={"input"} 
        placeholder={"Insira seu e-mail"} 
        type={"text"}
        name={"userEmail"}
        id={"userEmail"}
        value={formik.values.userEmail}
        onChange={formik.handleChange}
      />
      <Button type="submit">Assinar newsletter</Button>
    </Wrapper>
  );
}