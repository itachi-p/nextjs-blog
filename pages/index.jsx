import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import uniStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={uniStyles.headingMd}>
        <p>Hi, I'm <strong>itachi-p</strong>.I love animals and like vegetable curry.</p>
        <p>
          (This is a sample website - you'll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <main>
        <h3 className="title">
          Read{' '}
          <Link href={`/posts/about`}>
            about me!
          </Link>
        </h3>
        <h3 className='title'>
        <Link href={`/posts/recent-reads`}>
            Recently read books
          </Link>
        </h3>

        <Link href="https://www.pinterest.jp/itachip38/">
        <Image src="/images/penguinshibaki.gif" height={144} width={144} alt="🐧👏" />
        </Link>
        Contact me:&nbsp;
        <Link href="https://lit.link/itachi">My Lit.Link</Link>
      </main>
    </Layout>

  );
}
