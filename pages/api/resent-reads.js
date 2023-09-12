import recentlyReads from '../../public/data/recently-reads.json';

export default function handler(req, res) {
  res.status(200).json(recentlyReads);
}