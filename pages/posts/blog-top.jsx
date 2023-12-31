import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../../components/date';

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
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>

                    ))}

                </ul>
            </section>
            <h2>Sorry. This page is still under construction.</h2>
            <Image src="/images/nante-cotta.jpg"
                width={480}
                height={270}
                //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="nante-cotta"
                priority={true} />
        </Layout>
    );
}