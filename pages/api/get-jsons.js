/*
現状不使用。
ローカル(またはサーバ上に直接JSONを置く)でなく、ネットを介して外部APIから取得する場合は
- getStaticProps() & getStaticPaths()
  ビルド時に実行される。サーバ側で完結する事前レンダリングで静的生成。読み込み最速でSEO的によき。
または
- getServerSideProps()
  リクエスト毎に実行される。クライアントがページをロードする度にサーバ側でレンダリング。
*/

import recentlyReads from '../../public/data/recently-reads.json';

export default function handler(req, res) {
  res.status(200).json(recentlyReads);
}