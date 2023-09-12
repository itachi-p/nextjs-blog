import Head from 'next/head';
//import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import data from '../../public/data/recently-reads.json';

export default function RecentReads(props) {
    const postLists = props.postLists.records;
    console.log(postLists);
    return (
        <Layout utilStyles>
            <Head>
                <title>Recently read books📖</title>
            </Head>
            <h1 className="title">Recently read books</h1>
            <p>(ORDER BY read_date DESC)</p>
            <hr />
            {/* JSONファイルを読み込み、リスト形式で表示する */}
            {postLists.map((post, index) => (
                <section className="list" key={index}>
                    {/* 1行毎に背景色を変更(外部CSSで実装するよう変更) */}
                    {/* <style jsx>{`
                    div {
                        background-color: ${index % 2 === 0 ? '#f5f5f5' : '#fff'};
                    }
                    `}</style> */}
                    {index + 1}.&nbsp;
                    <Link href={post.book.url}>
                        {post.book.title}
                    </Link>
                    <p><span>Author</span>: {post.book.author}</p>
                    <p><span>Purchase date</span>: {post.date}</p>
                    <p><span>Total pages</span>: {post.book.page}</p>
                    <p><span>Overview | Purpose</span>: {post.what}</p>
                </section>
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