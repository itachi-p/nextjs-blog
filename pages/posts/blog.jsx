import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
            <h1>Sorry. This page is still under construction.</h1>
            <Image src="/images/nante-cotta.jpg"
                width={480}
                height={270}
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="nante-cotta"
                priority={true} />
        </Layout>
    );
}