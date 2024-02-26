import { Link } from "react-router-dom";

import './login.css';

const Login = () => {
  return (
    <section>
      <div className="auth">
        <h1>Login</h1>
        <form action="">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            placeholder="Nom d'utilisateur"
            required={true}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            required={true}
          />
          <p><Link to="/forgotpassword">Mot de passe oublié ?</Link></p>
          <button type="submit">Connexion</button>
        </form>
        <p className="login-message">Pas encore membre ? <Link to="/Signup">Inscription</Link></p>
      </div>
    </section>
  );
};

export default Login;
 