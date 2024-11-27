import { useState } from "react";
import settings from "../../settings.js";
import './login.css';

// Globals const
const BACKEND_SERVER_URL = settings.backendEndUrl;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClickToLogin = (evt) => {
        evt.preventDefault();

        if (!email || !password) {
            console.log('Preencha corretamente todos os campos !');
            return;
        }

        const jsonData = JSON.stringify({ email, password });

        const postOptions = {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(`${BACKEND_SERVER_URL}/signin`, postOptions)
            .then(async (response) => {
                const { data, err } = await response.json();

                if (err === "Invalid email or password") {
                    window.alert("Usuário ou senha errado!");
                    return;
                }

                if (data) {
                    localStorage.setItem("customerToken", data.jwtToken);
                    localStorage.setItem("customer", data.id);

                    window.alert("Aguarde, você será redirecionado!");

                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);

                    return;
                }
            })
            .catch((err) => console.log('err::: ', err.message));
    };

    return (
        <section className="login-container">
            <div className="login-wrapper">
                <div className="login-card">
                    <div className="login-content">
                        <h1 className="login-title">Entre na sua conta</h1>
                        <form className="login-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="silva@outlook.com"
                                    className="form-input"
                                    required
                                    name="email"
                                    type="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Senha:</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="form-input"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-primary"
                                onClick={handleClickToLogin}
                            >
                                Logar
                            </button>
                            <p className="signup-link">
                                Não possui uma conta? <a href="/customerCrud">Registre-se</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;