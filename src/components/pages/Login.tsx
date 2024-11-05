import styled from "styled-components";
import InputContainer from "../common/InputContainer";
import { useForm } from "react-hook-form";
import { flexCenterCenter } from "../../styles/styledHelpers";
import Button from "../common/Button";
import { signInAndGetProfileId } from "../../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../common/SpinnerMini";

const Container = styled.div`
  ${flexCenterCenter}

  height: 100vh;
  background-color: var(--bg-gray-0);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-white);
  padding: 2rem;
  border-radius: var(--br-m);
  gap: 2rem;
  color: var(--fc-black);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  background-color: var(--bg-gray-1);
  padding: 1rem 1.5rem;
  border-radius: var(--br-s);
  color: var(--fc-black);
`;

interface LoginProps {
  email: string;
  password: string;
}

function Login() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "12345678",
    },
  });

  const onSubmit = async ({ email, password }: LoginProps) => {
    await dispatch(signInAndGetProfileId({ email, password, navigate }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer
          htmlFor="email"
          label="Почтовый ящик"
          message={errors.email?.message}
        >
          <Input
            {...register("email", { required: "Это поле обязательное" })}
            type="email"
          />
        </InputContainer>
        <InputContainer
          htmlFor="password"
          label="Пароль"
          message={errors.password?.message}
        >
          <Input
            {...register("password", { required: "Это поле обязательное" })}
            type="password"
          />
        </InputContainer>
        <Button icon={false}>{loading ? <SpinnerMini /> : "Войти"}</Button>
      </Form>
    </Container>
  );
}

export default Login;
