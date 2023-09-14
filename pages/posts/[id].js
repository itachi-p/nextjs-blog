// ダイナミックルートを使用する場合、ファイル名を[xxx].jsとする必要がある
// リクエストの度に読み込んだファイルを解析して'id'(ファイル名)を取得し、
// そのidをブラウザ上のURL子要素として動的にページリンクが生成される
//※ただし実際にidに対応するHTMLファイルは存在しないため、再読み込みするとエラーになる

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    );
}
