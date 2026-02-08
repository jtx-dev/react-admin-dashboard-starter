import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">Admin</h1>

            <nav className="sidebar-nav">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'sidebar-link active' : 'sidebar-link'
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive ? 'sidebar-link active' : 'sidebar-link'
                    }
                >
                    Users
                </NavLink>
            </nav>
        </aside>
    );
}
