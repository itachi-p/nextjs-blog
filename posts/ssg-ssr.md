---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

### When to Use Static-site Generation v.s. Server-side Rendering

SSG(静的サイトジェネレーター)及びSSR(サーバーサイドレンダリング)
違いは、HTMLを生成するタイミングにある。
SSGは、完全に固定（独立）した情報からビルド時にHTMLを生成する。
SSRは、外部データ読み込みなど動的な部分をクライアントからのリクエストごとに生成するが、その際にクライアント側JavaScriptに全部投げるのではなく、多くの部分をサーバー側でレンダリングすることで、SEO対策や送信データ量の削減などパフォーマンスの向上を図ることができる。

SSGはビルド時にHTMLを生成するため、CDNによる高速化が可能。
世界中に配置されているサーバのうち、ユーザーからのリクエストに対して最も物理的に近いリージョンのサーバからレスポンスを返すことで、レスポンス速度を向上させる仕組みのこと。
要は既に完成している静的コンテンツの配信を、リクエストを送ってくるユーザに最も近い場所に待機しておき、リクエストが来たらすぐに返せる状態にしておく、というもの。

SSRは、クライアントからのリクエストごとにHTMLを生成するため、SSGよりは遅いが、アクセスしているユーザーに合わせた情報や、常に最新の情報を表示することができる。
