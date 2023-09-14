import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm <strong>itachi-p</strong>.</p>
        <p>I love animals🐻🐯🐱🦆🐸🪲 and like vegetable curry🍛.</p>
        <p>This page is <strong><Link href="https://github.com/itachi-p/nextjs-blog">the repository</Link></strong> on my GitHub.</p>
        <p>The source for this site is {' '}
          <Link href="https://nextjs.org/learn">Next.js tutorial</Link>.
        </p>
      </section>
      <section  className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Contents:</h2>
        <ul className={utilStyles.list}>
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
            <small className={utilStyles.lightText}>
              </small>
          </li>
        </ul>
      </section>
      <Footer />
    </Layout>
  );
}
