import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth.service';
import '../styles/header.css';

export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="header">
            <span>Admin Dashboard</span>
            <button className="logout" onClick={handleLogout}>
                Logout
            </button>
        </header>
    );
}
