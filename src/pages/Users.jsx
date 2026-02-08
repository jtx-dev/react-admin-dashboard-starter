import { useState } from 'react';
import { getUsers, saveUsers } from '../services/users.service.js';
import UserModal from '../components/UserModal';
import ConfirmModal from '../components/ConfirmModal';
import '../styles/table.css';
import '../styles/buttons.css';
import { useOutletContext } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState(() => getUsers());
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    // 🔴 NUEVO: estados para confirmación
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const { showToast } = useOutletContext();

    // ✅ CREATE / UPDATE
    const handleSave = (user) => {
        let updated;

        if (user.id) {
            updated = users.map(u => (u.id === user.id ? user : u));
            showToast('User updated');
        } else {
            updated = [...users, { ...user, id: Date.now() }];
            showToast('User created');
        }

        setUsers(updated);
        saveUsers(updated);
    };

    // ✅ DELETE CONFIRMADO
    const handleDeleteConfirmed = () => {
        const updated = users.filter(u => u.id !== userToDelete.id);

        setUsers(updated);
        saveUsers(updated);

        showToast('User deleted', 'error');

        setConfirmOpen(false);
        setUserToDelete(null);
    };

    return (
        <div>
            <h2>Users</h2>
            <p style={{ marginBottom: 16, color: '#6b7280' }}>
                Manage system users
            </p>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setSelectedUser(null);
                    setModalOpen(true);
                }}
            >
                + New User
            </button>

            <table className="table" style={{ marginTop: 16 }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th width="180">Actions</th>
                </tr>
                </thead>

                <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center', padding: 16 }}>
                            No users found
                        </td>
                    </tr>
                ) : (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setModalOpen(true);
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        setUserToDelete(user);
                                        setConfirmOpen(true);
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>

            {/* MODAL CREAR / EDITAR */}
            <UserModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
                user={selectedUser}
            />

            {/* MODAL CONFIRMAR DELETE */}
            <ConfirmModal
                isOpen={confirmOpen}
                title="Delete user"
                message={`Are you sure you want to delete "${userToDelete?.name}"?`}
                onCancel={() => {
                    setConfirmOpen(false);
                    setUserToDelete(null);
                }}
                onConfirm={handleDeleteConfirmed}
            />
        </div>
    );
}
