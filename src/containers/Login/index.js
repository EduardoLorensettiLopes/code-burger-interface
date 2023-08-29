import React from "react"

import LoginImg from '../../assets/login-image.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SigInLink
} from './styles'

function Login() {
  return (
    <Container>
      <LoginImage  src={LoginImg} alt="Login-image"/>
      <ContainerItens>
        <img />

        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>SingIn</Button>
        <SigInLink>Não possui conta? <a href="">SignUp</a></SigInLink>

      </ContainerItens>
    </Container>
  );
}

export default Login;
