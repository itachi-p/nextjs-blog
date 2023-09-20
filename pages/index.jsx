import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
// ちなみにこのアプリでもTailWind CSSは利用可能（どちらか一方）
// import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm <strong>itachi-p</strong>.</p>
        <p>I love animals🐻🐯🐱🦆🐸🦎🪲 and like vegetable curry🍛.</p>
        <p>This page is <strong><Link href="https://github.com/itachi-p/nextjs-blog">the repository</Link></strong> on my GitHub.</p>
        <p>The source for this site is {' '}
          <Link href="https://nextjs.org/learn">Next.js tutorial</Link>.
        </p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Contents:</h2>
        <ul>
          <li className={utilStyles.listItem}>
            Read{' '}
            <Link href={`/posts/blog-top`}>
              blog
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/posts/recent-reads`}>
              Recently read books
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <details>
              <summary>API学習関連 (クリックで展開)</summary>
            <ol>
              <li>
                <Link href={`/api/get-json`}>
                  内部API Endpoint作成テスト
                </Link>
                &nbsp;(JSON & Postman)
              </li>
              <li>
                <Link href={`/access-api`}>
                  外部API接続テスト(田川のいま🐗🦌)
                </Link>
              </li>
              <li>
                <Link href={`/users`}>
                  外部API→DB連携(DB接続部はローカルのSQLite3でテスト)
                </Link>
              </li>
              <li>
                <Link href="https://graphql-prisma-supabase.vercel.app/">
                  GraphQL & Prisma & Supabase & Tailwind CSS
                </Link>
              </li>
            </ol>
            </details>
          </li>
          <li className={utilStyles.listItem}>
            My&nbsp;
            <Link href="https://lit.link/itachi">Lit.Link</Link>
          </li>
          <li className={utilStyles.listItem}>
            My&nbsp;
            <Link href="https://www.github.com/itachi-p/">
              GitHub home
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="https://www.pinterest.jp/itachip38/">
              ビンタですと(？)🐧👏
              <Image src="/images/penguinshibaki.gif" height={120} width={120} alt="🐧👏" />
            </Link>
          </li>
        </ul>
      </section>
      <Footer />
    </Layout>
  );
}
