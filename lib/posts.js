import fs from 'fs'; // File Systemを読み込むNode.jsのモジュール
import path from 'path';
import matter from 'gray-matter'; // Markdownのメタデータを解析するためのライブラリ

// 各mdファイルを解析し、タイトル、日付、ファイル名（投稿URLのidとして使用される）を取得

const postsDirectory = path.join(process.cwd(), 'posts');

// markdownのメタデータを解析した上で、日付の新しい順にソートする関数
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
