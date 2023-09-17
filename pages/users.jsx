import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../components/layout.module.css';

export default function Users() {
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
        <div className={styles.container}>
            <h2>Users</h2>
            <hr />
            <p><span>※データは<Link href="https://www.jsonplaceholder.org/">JSONPlaceholder</Link>のサンプルAPIを利用</span></p>
            <p>ユーザ一覧と、各ユーザidに紐づく単体データ</p>
            <p>各ユーザの詳細ページは<Link href="https://ja.wikipedia.org/wiki/%E8%AE%83%E5%B2%90%E3%81%86%E3%81%A9%E3%82%93">元祖てぬきうどん</Link>方式</p>
            <p>(/api/users/[id]のJSONをそのまま表示)</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`api/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <p><span>API RoutesからのDB接続は別途実施</span></p>
            <p>※GraphQL & Prisma & Supabase 連携別アプリとして切り出し予定</p>
            <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
        </div>
    );
}