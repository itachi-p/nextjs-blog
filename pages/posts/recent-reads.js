import Head from 'next/head';
//import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import data from '../../public/data/recently-reads.json';

export default function RecentReads(props) {
    const postLists = props.postLists.records;
    console.log(postLists);
    return (
        <Layout>
            <Head>
                <title>Recently read books</title>
            </Head>
            <h1 className="title">Recently read books</h1>
            {/* JSONファイルを読み込み、リスト形式で表示する */}

            {postLists.map((post, index) => (
                <div key={index}>
                    {index + 1}.&nbsp;
                    <Link href={post.book.url}>
                       {post.book.title}
                    </Link>
                    <p>(著者): {post.book.author}</p>
                    <p>(購入日): {post.date}</p>
                    <p>(概要・読書目的): {post.what}</p>
                </div>
            ))}
        </Layout>
    );
}

export const getStaticProps = async () => {
    return {
        props: {
            postLists: data,
        },
    };
}