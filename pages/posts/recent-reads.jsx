import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import data from '../../public/data/recently-reads.json';

export default function RecentReads(props) {
    const postLists = props.postLists.records;
    // console.log(postLists);
    return (
        <Layout utilStyles>
            <Head>
                <title>Recently read books📖</title>
            </Head>
            <h1>Recently read books📖</h1>
			<p><Link href="https://bookmeter.com/users/1441045">💡読書メーター</Link></p>
            <hr />
            {/* JSONファイルを読み込み、一覧表示する */}
            {postLists.map((post, index) => (
                <section className="list" key={index}>
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