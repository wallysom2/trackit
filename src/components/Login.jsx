import logo from "./../assets/imgs/logo.svg";

const Login = () => {
    return (
        <div className="login">
            <img src={logo} className="login__logo" alt="logo" />
            <form className="login__form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <h4>Náo tem uma conta? Cadastre-se</h4>
        </div>
    );
}

export default Login;