import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
//import Home from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';

export default function Index() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <description>
        <p>Hi, I'm <strong>itachi-p</strong>.</p>
        <p>I love animals🐻🐯🐱🐸🪲 and like vegetable curry🍛.</p>
        <p>This page is <strong><Link href="https://github.com/itachi-p/nextjs-blog">the repository</Link></strong> on my GitHub.</p>
        <p>The source for this site is {' '}
          <Link href="https://nextjs.org/learn">Next.js tutorial</Link>.
        </p>
      </description>
      <hr />
      <main>
        <h2>Contents:</h2>
        <strong>
          <li>
            Read{' '}
            <Link href={`/posts/blog-top`}>
              blog
            </Link>
          </li>
          <li>
            <Link href={`/posts/recent-reads`}>
              Recently read books
            </Link>
          </li>
          <li>
            My&nbsp;
            <Link href="https://lit.link/itachi">Lit.Link</Link>
          </li>
          <li>
            My&nbsp;
            <Link href="https://www.github.com/itachi-p/">
              GitHub home
            </Link>
          </li>
          <li>
            <Link href="https://www.pinterest.jp/itachip38/">
              ビンタですと(？)🐧👏
              <Image src="/images/penguinshibaki.gif" height={144} width={144} alt="🐧👏" />
            </Link>
          </li>
        </strong>
      </main>
      <Footer />
    </Layout>
  );
}
