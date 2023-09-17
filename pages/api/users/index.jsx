export default async function handler(req, res) {
    // API Routes中の処理はサーバ側なので、下のconsole.log()はサーバ側のコンソールにだけ出力される
    console.log(req.method);
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await response.json();
    res.status(200).json({ users });
}
