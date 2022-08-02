import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "./../assets/imgs/logo.svg";

const Cadastro = () => {
    return (
        <CadastroStyled>
            <img src={logo} className="cadastro__logo" alt="logo" />
            <form className="cadastro__form">
                <input type="text" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="foto" />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça seu login</Link>
        </CadastroStyled>
    );
}

export default Cadastro;

const CadastroStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    .cadastro__logo {
        width: 100px;
        margin-bottom: 20px;
    }
    .cadastro__form {
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
    Link {
        margin-top: 20px;
    }
`;
