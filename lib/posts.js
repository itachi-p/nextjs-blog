import fs from 'fs'; // File Systemを読み込むNode.jsのモジュール
import path from 'path';
import matter from 'gray-matter'; // Markdownのメタデータを解析するためのライブラリ
import { remark } from 'remark';
import html from 'remark-html';

// 各mdファイルを解析し、タイトル、日付、ファイル名（投稿URLのidとして使用される）を取得
const postsDirectory = path.join(process.cwd(), 'posts');

// markdownのメタデータを解析した上で、日付の新しい順にソートする関数
// 今回はローカルのファイルシステムを使用しているが、async/awaitを使って
// 外部のAPIやデータベースからデータを取得するように書き換えも可能。
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// postsディレクトリ内のファイル名(.mdを除く)のリストを返す関数
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// id(.md)に基づいてブログ投稿のデータを返す関数
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
