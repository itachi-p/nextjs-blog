import { useState, useEffect } from 'react';

export default function AccessAPI() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data.users);
        };
        fetchUsers();
    }, []);

    return (
        // console.log(users),
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p><span>name: </span>{user.name}</p>
                        <p><span>email: </span>{user.email}</p>
                        <p><span>company: </span>{user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}