import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./../assets/imgs/logo.svg";

const Login = () => {
    return (
        <LoginStyled>
            <img src={logo} className="login__logo" alt="logo" />
            <form className="login__form">
                <input type="text" placeholder="email" />
                <input type="password" placeholder="senha" />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro">Náo tem uma conta? Cadastre-se</Link>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
    .login__logo {
        width: 100px;
        margin-bottom: 20px;
    }
    .login__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 400px;
        padding: 20px;
        border-radius: 5px;

        input {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 10px;
        }
        input::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
        }
        button {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #00a8ff;
            color: #fff;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;

            &:hover {
                background-color: #00a8ff;
                color: #fff;
            }
        }
    }
    a {
        color: #00a8ff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;
