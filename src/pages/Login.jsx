import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth.service';
import '../styles/auth.css';

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        navigate('/');
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
    );
}
