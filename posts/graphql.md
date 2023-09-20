---
title: 'Tried using GraphQL. '
date: '2023-09-19'
---

# はぢめてのGraphQL

(主な使用技術)
- GraphQL:REST API の代替規格。REST APIの抱える2つの問題を解決
- Apollo (Server & Client): GraphQLの実装ライブラリ
- Prisma: DB接続用のORMの一つ
- Supabase(Postgres): DBサーバとして利用
- Next.js
- TypeScript
- Vercel: デプロイ先
- Tailwind CSS:あまり調べずにテキトーに使ってみた
    - Tsx, JsxのソースコードがclassNameで煩雑になり、可読性が落ちる印象

(参考記事)
- [Next.jsのAPI RoutesにGraphQLサーバ設定+Vercelにデプロイ](https://reffect.co.jp/react/next-js-graphql/)
- [これを読めばGraphQL全体がわかる。GraphQLサーバからDB、フロントエンド構築](https://reffect.co.jp/html/graphql/)

(学習方針)
GraphQLの理解を深める、というよりも「とりあえず一度使ってみる」ことを目的とする。
深い掘り下げは学習コスト的に現状では優先度低めに設定。

## GraphQL vs RESTful API

どちらもインターネット上でデータを交換するためのAPIを設計する際の規格。(厳密には規格と仕様)
- REST
	- HTTPリクエストの種類によってCRUD処理を行う
		- GET : データの読み込み。SQLのSELECT
		- POST : データの新規追加。SQLのINSERT
		- PUT または PATCH : データの更新。SQLのUPDATE
		- DELETE : データの削除。
		- 他にもあるが、CRUDシステムで通常よく使うのは上記の4つ
- GraphQL
	- HTTPリクエストとしては全てPOSTになる
		- POSTリクエスト中のbodyにクエリ(命令)を記述し、それに従い検索や書き込みを行う
		- 厳密にはデータを書き換えず取得するだけの操作はQuery, 書き換え操作はMutation
			- SQLで言えばQueryがSELECT、MutationがINSERT, UPDATE, DELETEに相当する。
        - 他にSubscriptionという特殊な機能もあるが、ここでは割愛
            - (リアルタイムでデータの変更を監視する機能、とだけ書き留めておくことにする)

### RESTの課題

- データにアクセスするためのエンドポイントが多くなりがち
	- /user, /user/{id}, /post /post/{id}, ...
- RESTは返すデータセットが固定な為、オーバーフェッチやアンダーフェッチが多数発生
	- 「ユーザの名前と購買履歴だけが欲しい」という場合に、過剰と不足が頻発する
		- ユーザの名前だけでいいのにユーザ情報全てを受け取ることになる(オーバーフェッチ)
		- そのユーザーに紐づく購買履歴は別のエンドポイントにアクセスが必要(アンダーフェッチ)

上記の課題をGraphQLは単一のエンドポイントに対してクエリを投げる形で最適なデータを取得できる
と、これだけ聞くとメリットしかないんでは？と思えるがそんな単純な話でもない。  

他にも独自の機能・RESTに勝る点もあるが、当然デメリット・弱点もある。  

なのでネット上では賛否両論（宗教戦争）であり、
「RESTの時代オワタ＼(^o^)／これからはGraphQL」
「は？GraphQLなんて使えんわヴォケ」などと各々好き勝手言われている模様。  

「業務で触れる機会は無いけど、会社に影響の無い個人開発で使ってみた」
といった好奇心ドリブンなエンジニアによる両者を比較した上で好意的・中立的な声も見掛けられる。  

---

(所感)
これを深めることが強み・差別化に成り得るかもしれないが、
現状では「一度個人的にRESTでなくGraphQLでAPIを作ってみたことがある」くらいでいいかもしれない。  
他に優先的に学習すべき（と思われる）学習対象が山積しているので、軽く触れるに留めそちらを優先する。

#### 進捗管理

---
- [x] 1. プロジェクトの作成
- [x] 2. GraphQL の動作確認
	- [x] GraphQL のインストール
	- [x] GraphQL サーバの設定
	- [x] Apollo Studio Explorer からの接続
	- [x] スキーマの追加
- [x] 3. Prisma と DB の設定
	- [x] Prisma のインストール
	- [x] schema.prisma ファイル
		- [x] genaratos の設定
		- [x] datasource の設定
	- [x] Supabase の PostgreSQL への接続
	- [x] User モデルの追加
	- [x] マイグレーションの実行
	- [x] Prisma Studio の利用
- [x] 4. Apollo Server から DB への接続
- [x] 5. フロントエンド側の設定
	- [x] Apollo Client のインストール
		- [ ] (要追加対応)更新の度に新たなインスタンスが作られてすぐに上限に達するエラー
			- [ ] 既存のインスタンスを再利用し、更新の度にインスタンスを増やさない
			- [ ] Best practice for instantiating PrismaClient with Next.js
- [x] 6. デプロイ
	- [x] Apollo Client の URI の変更
	- [x] GitHub でのリポジトリの作成
	- [x] GitHub へのアップロード
	- [x] Vercel の設定

---

まずはプロジェクト作成 (TypeScriptのオプションを忘れないように)
```
$ npx create-next-app --ts graphql-prisma-supabase
```
続いてGraphQLほかのインストール
GraphQL サーバの Apollo Server を動かすために Node.js の Web Application Framework のmicroを利用
microはExpressの軽量版のようなもの。
micro 用の Apollo Server の apollo-server-micro もインストール
```sh
$ npx install apollo-server-micro micro graphql
```
※npxだとverbose(冗長)errorが出たので、勝手にnpmに変えたら問題なく？インストールできたっぽい  

今回は使用フレームワークがNext.jsなので、Node.js(JavaScript)を使ったGraphQLサーバ(~~ラブライブ~~ ライブラリ)の中でメジャーなApollo-server(& Apollo-client)を選択。  

殆どの言語用にGraphQLを利用する為のライブラリが複数用意されている。
- 異なる規格のDB, API, 言語WAF等の複数のデータリソースと連携・それらを統合したAPIサーバを構築
- それをクライアントとして利用するのを支援

[GraphQL用の各言語ライブラリ一覧](https://graphql.org/code/)

大本のデータ取得元としては既存のものから収集し、それをサーバ側でGraphQLの単一のエンドポイントとしてクライアント側に公開。  
その後、クライアント側には影響を与えずバックエンド側でデータリソースを段階的に旧来のRESTからGraphQLへ移行していく  
…といった導入も可能。

![GraphQLの宇宙観を顕す曼荼羅](/images/Apollo-GraphQL.png)

（引用説明）
Apollo を利用することで、あらゆるデータが GraphQL サーバーとして集約される。  
こうすることでバックエンドの複雑性が Apollo によって隠蔽され、クライアントおよびバックエンドは Apollo サーバーとの接続にのみ注意すればよくなる。  
例えば REST サーバーから GraphQL サーバーに移行したいのであれば、一度 Apollo を間に挟んで GraphQL サーバーを利用できる状態にしておき、後から段階的に移行していく、などという方法がとれる。

---

##### GraphQLお試し
[StudioApolloGraphQL Sandbox](https://studio.apollographql.com/sandbox/explorer)  
左上のSANDBOXの欄に `http://localhost:3000/api/graphql`を入力

###### Apollo Clientのインストール

サーバ側だけでなく、クライアント側でもDBからデータを取得できるようになる
REST APIと違ってGraphQLは単一（階層構造でない）のエンドポイントで全ての情報にリクエスト可能
```tsx
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
});
```
すべてのコンポーネントで Apollo Client が利用できるように_app.tsx ファイルで Apollo Client の設定を行い、Apollo Provider タグで Component タグを包む。  

なお、ドキュメントルートは/pages/ または /app/index.tsx
/app/はNext.jsの新しいバージョンからのホームで、現状古い仕様となった/pages/もどちらもOkだが、**両方にindexなど同名ファイルを置くとコンフリクト**する

---

#### Vercelへのデプロイ

※デプロイ時にSupabaseのPostgresに接続するための情報が入っている.env をGitHub等に上げないよう要注意。  
過去のコミットにも残らないよう最初から.gitignoreに入れておくべき。  
一度でもコミット履歴に残ってから.gitignoreに追加しても無効。  
その場合は以下のコマンドで履歴を削除する必要がある。
```sh
git rm --cached .env
```

初回デプロイ結果ー**失敗**  
ローカルでの動作は問題無し。

画面表示
```
Error: Response not successful: Received status code 405
```
「検証」のconsole
```
POST https://graphql-prisma-supabase.vercel.app/api/graphql 405 (Method Not Allowed)
```
どうやらPOSTメソッドが許可されていない模様？

/pages/_app.tsx のApolloClientのインスタンス生成時に、URIとして/api/graphql と相対パスで指定しているのは恐らく間違ってない。  
逆にここを絶対パスで指定するとたぶんURLが重複して404エラーになる（未確認）

Vercelのログのmessage
```
Prisma has detected that this project was built on Vercel, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the `prisma generate` command during the build process.

Learn how: https://pris.ly/d/vercel-build
```
どうやらPrismaクライアントの生成タイミングの問題の模様。  
ビルド中に`prisma generate` コマンドを実行して生成する必要がありそう。  

方法については、https://pris.ly/d/vercel-build (または以下)を参照  
https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue

package.jsonのscripts >build のデフォルトのコマンドの前に`"prisma generate && `を追記
```json
{
  ...
  "scripts" {
    "build": "prisma generate && <actual-build-command>"
  }
  ...
}
```
今回の場合以下のようになる。
```json
"scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint"
  },
```
↓  
解決ざます！

Vercelダッシュボード→当アプリ  
https://vercel.com/itachi-p/graphql-prisma-supabase

Postgresのデータ登録件数もカラムも少ないのでピンと来ないが、データやテーブルを増やすことでよりGraphQLのメリットが出てくるかもしれない。

(おまけ)
[Tailwind CSS実践入門第3章 Tailwind CSSの活用](https://gihyo.jp/article/2023/07/tailwindcss-practice-03)