import '../styles/toast.css';

export default function Toast({ toast }) {
    if (!toast) return null;

    return (
        <div className={`toast toast-${toast.type}`}>
            {toast.message}
        </div>
    );
}
