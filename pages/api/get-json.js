/*
ローカル(またはサーバ上に直接JSONを置く)でなく、ネットを介して外部APIから取得する場合は
- getStaticProps() & getStaticPaths()
  ビルド時に実行される。サーバ側で完結する事前レンダリングで静的生成。読み込み最速でSEO的によき。
- getServerSideProps()
  リクエスト毎に実行される。クライアントがページをロードする度にサーバ側でレンダリング。
*/

import recentlyReads from '../../public/data/recently-reads.json';

// Next.js API Routea is Serverless Functions
export default function handler(req, res) {
// https://nextjs-testapp02-blog.netlify.app/api/get-json
// 上記URIにアクセスすると、以下のJSONの内容が表示される。
  // res.status(200).json(recentlyReads);
//更に上記をファイルとして保存するよう促す
  res.status(200).send(recentlyReads);
}