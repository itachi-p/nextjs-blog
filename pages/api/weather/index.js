// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// req is an instance of http.incomingMessage, plus some pre-built middlewares.
// res is an instance of http.serverResponse, plus some helper functions.
export default async function handler(req, res) {
    const city = //req.query;
                 'Tagawa'   // 今回はリクエストを受け付けず、固定値で田川市の天候を返す
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=e9585ab2b07548dc8cd120216230209&q=${city}&aqi=no`);
    const weather = await response.json();
    res.status(200).json({ weather });
}
