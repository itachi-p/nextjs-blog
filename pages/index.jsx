import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import uniStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={uniStyles.headingMd}>
        <p>Hi, I'm <strong>itachi-p</strong>.I love animals and like vegetable curry.</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
