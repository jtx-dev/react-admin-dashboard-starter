import '../styles/confirm-modal.css';
import '../styles/buttons.css';

export default function ConfirmModal({
                                         isOpen,
                                         title = 'Confirm action',
                                         message,
                                         onCancel,
                                         onConfirm,
                                     }) {
    if (!isOpen) return null;

    return (
        <div className="confirm-overlay">
            <div className="confirm-modal">
                <h3>{title}</h3>
                <p>{message}</p>

                <div className="confirm-actions">
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-danger" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
