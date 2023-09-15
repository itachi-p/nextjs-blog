// pages/404.js
import Image from 'next/image'
import Layout from '../components/layout';

export default function Custom404() {
  return (
    <Layout>
      <h1>404 - Page could not be found...</h1>
      <Image src="/images/nante-cotta.jpg"
        width={480}
        height={270}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="nante-cotta"
        priority={true} />
      <p>Oops! お探しのページは見つかりませんでした。</p>
    </Layout>
  );
}