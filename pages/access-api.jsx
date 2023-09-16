import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

// サーバサイドレンダリングによるapi/weatherへのアクセス
// 相対パスではなく、絶対パスである点に注意が必要。（特に本番環境へのデプロイ時）
export async function getServerSideProps() {
    const response = await fetch('https://nextjs-testapp02-blog.netlify.appapi/weather');
    const data = await response.json();

    return { props: { data } };
}

export default function ApiAccess({ data }) {
    const iconUrl = "https:" + data.weather.current.condition.icon;

    return (
        <div className={styles.container}>
            <h2 className={utilStyles.headingXl}>田川市なう。</h2>
            <img src={iconUrl} />
            <p>{data.weather.current.condition.text}</p>
            <p><span>都市名:</span>{data.weather.location.name}</p>
            <p><span>地域:</span>{data.weather.location.region}</p>
            <p><span>気温:</span>{data.weather.current.temp_c}℃</p>
            <p><span>湿度:</span>{data.weather.current.humidity}%</p>
            <p><span>風速:</span>{data.weather.current.wind_mph}m/h</p>
            <p><span>風向:</span>{data.weather.current.wind_dir}</p>
            <p><span>気圧:</span>{data.weather.current.pressure_mb}㍊</p>
            <hr />
            <h3 className={utilStyles.headingMd}>
                <Link href="https://weather-report-react-ts.netlify.app/">
                    世界の各都市の天候はこちら(React+TypeScript)
                </Link>
            </h3>
            <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
        </div>
    );
}