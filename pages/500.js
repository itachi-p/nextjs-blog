// pages/404.js
import Image from 'next/image'
import Layout from '../components/layout';

export default function Custom500() {
  return (
    <Layout>
      <h1>500 - Server-side error occurred...</h1>
      <Image src="/images/nante-cotta.jpg"
        width={480}
        height={270}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="nante-cotta"
        priority={true} />
      <p>Oh...サーバ側で何か問題があったようです。</p>
    </Layout>
  );
}