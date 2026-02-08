import { useState } from 'react';
import '../styles/modal.css';
import '../styles/buttons.css';

const EMPTY_USER = {
    name: '',
    email: '',
    role: 'User',
};

export default function UserModal({ isOpen, onClose, onSave, user }) {
    const [form, setForm] = useState(EMPTY_USER);
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    // sincronización explícita
    if (user && form !== user) {
        setForm(user);
        setErrors({});
    }

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
    };

    const handleSubmit = () => {
        if (!validate()) return;

        onSave(form);
        onClose();
        setForm(EMPTY_USER);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>{user?.id ? 'Edit User' : 'New User'}</h3>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                >
                    <option>User</option>
                    <option>Admin</option>
                </select>

                <div className="modal-actions">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
