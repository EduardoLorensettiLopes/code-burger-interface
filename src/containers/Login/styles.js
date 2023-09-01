import styled from 'styled-components';
import Background from '../../assets/Background.svg';

const colors = {
  white: '#ffffff',
  purple: '#9758a6',
  gray: '#373737',
};

const dimensions = {
  buttonWidth: '182.81px',
  buttonHeight: '36.13px',
  inputWidth: '391.42px',
  inputHeight: '50px',
};

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginImage = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  background: ${colors.gray};
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  padding-top: 200px;
  flex-direction: column;
  display: flex;

  form{
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${colors.white};
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.white};
  margin-top: 28px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: ${dimensions.inputWidth};
  height: ${dimensions.inputHeight};
  background: ${colors.white};
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 15px;
  font-size: 18px;
`;

export const Button = styled.button`
  width: ${dimensions.buttonWidth};
  height: ${dimensions.buttonHeight};
  background: ${colors.purple};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 25px; /* Ajustado para manter coerência */
  margin-bottom: 25px;
  color: ${colors.white};

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.white}; /* Alterado para a cor branca */

  a {
    cursor: pointer;
    text-decoration: underline;
    color: ${colors.white}; /* Adicionado para definir a cor do link */
  }
`;

