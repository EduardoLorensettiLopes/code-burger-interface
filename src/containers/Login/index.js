import React from "react"
import { useForm } from "react-hook-form"

import LoginImg from '../../assets/login-image.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Login-image" />
      <ContainerItens>
        <img />

        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" { ...register("email") }/>

          <Label>Senha</Label>
          <Input type="password" { ...register("password") }/>

          <Button type="submit">SingIn</Button>
        </form>
        
        <SignInLink>Não possui conta? <a href="">SignUp</a></SignInLink>

      </ContainerItens>
    </Container>
  );
}

export default Login;
