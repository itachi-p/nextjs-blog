import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../components/layout.module.css';

// ローカル環境でのAPI RoutesからのDatabase接続テスト
// 相対パスではなく、絶対パスである点に注意が必要。（特に本番環境へのデプロイ時）
export async function getServerSideProps() {
    //const response = await fetch('https://nextjs-testapp02-blog.netlify.app/api/users');
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    return { props: { data } };
}

export default function Users({ data }) {
    return (
        <div className={styles.container}>
            <h3>Users from connect DB</h3>
            <ul>
                {data.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
        </div>
    );
}