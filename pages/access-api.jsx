import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import Image from 'next/image';

// サーバサイドレンダリングによるapi/weatherへのアクセス
// 相対パスではなく、絶対パスである点に注意が必要。（特に本番環境へのデプロイ時）
export async function getServerSideProps() {
    const response = await fetch('https://nextjs-testapp02-blog.netlify.app/api/weather');
    const data = await response.json();

    return { props: { data } };
}

export default function ApiAccess({ data }) {
    return (
        <div className={styles.container}>
            <Image src="/images/tagawa_iikane.jpg" width={250} height={200} className={utilStyles.borderCircle} />
            <h3 className={utilStyles.headingMd}>田川よいとこ一度はおいで 🐗=3</h3>
            <img src={"https:" + data.weather.current.condition.icon} />
            <p><span>気温:</span>{data.weather.current.temp_c}℃</p>
            <p><span>湿度:</span>{data.weather.current.humidity}%</p>
            <p><span>風速:</span>{data.weather.current.wind_mph}m/h</p>
            <p><span>風向:</span>{data.weather.current.wind_dir}</p>
            <p><span>気圧:</span>{data.weather.current.pressure_mb}㍊</p>
            <p><span>猪指数:</span>🐗🐗🐗🦌🦋</p>
            <hr />
            <h4>
                <Link href="https://weather-report-react-ts.netlify.app/">
                    世界の各都市の天候はこちら(React+TypeScript)
                </Link>
            </h4>
            <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
            </div>
        </div>
    );
}