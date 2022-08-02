import styled from "styled-components";

import logo from "./../assets/imgs/logo.svg";

const Login = () => {
    return (
        <LoginStyled>
            <img src={logo} className="login__logo" alt="logo" />
            <form className="login__form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <h4>Náo tem uma conta? Cadastre-se</h4>
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
        button {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #00a8ff;
            color: #fff;

            &:hover {
                background-color: #00a8ff;
                color: #fff;
            }
        }
    }
    h4 {
        margin-top: 20px;
        font-size: 14px;
        color: #00a8ff;
        text-align: center;
    }
`;
