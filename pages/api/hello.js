// req is an instance of http.incomingMessage, plus some pre-built middlewares.
// res is an instance of http.serverResponse, plus some helper functions.
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
    }
    