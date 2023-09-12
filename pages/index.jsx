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
        <p>Hi, I'm <strong>itachi-p</strong>.</p>
        <p>I love animals🐻🐯🐱🐦‍⬛🐸🪲 and like vegetable curry🍛.</p>
        {/* <p>
          (This is a sample website - you'll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
        <hr />
      </section>
      <main>
        <strong>
          <li>
            Read{' '}
            <Link href={`/posts/about`}>
              about me!
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
              GitHub repositories
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

      <hr />
      <footer>
        <p>© 2023 itachi-p</p>
      </footer>
    </Layout>

  );
}
