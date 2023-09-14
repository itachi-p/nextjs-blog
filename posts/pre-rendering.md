---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

### When to Use Static Generation v.s. Server-side Rendering

これはプリ・レンダリングされるページ。
このページはビルド時に完全にそのまま再利用可能な静的コンテンツ(ユーザーやタイミングなどによって内容の変更が発生しないHTML） にレンダリングされ、その後、クライアント側で React によってハイドレート（クライアント側でインタラクティブに表現するための最小限のJavaScriptとしてレンダリング）される。
このアプローチは、主にSEOのために使われる。
ユーザーやタイミングによって表示する内容が変わらないページに最適。
