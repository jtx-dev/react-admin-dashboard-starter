import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/layout.css';
import Toast from '../components/Toast';
import { useToast } from '../hooks/useToast';


export default function AdminLayout() {
    const { toast, showToast } = useToast();

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Header />
                <main className="page">
                    <Outlet context={{ showToast }} />
                </main>
            </div>

            <Toast toast={toast} />
        </div>
    );
}

