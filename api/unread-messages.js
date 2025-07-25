// api/unread-messages.js

export default function handler(req, res) {
  const apiKey = process.env.CLUBREADY_KEY;

  if (!apiKey) {
    return res.status(400).json({ error: 'Missing CLUBREADY_KEY' });
  }

  // Your logic here (example response)
  res.status(200).json({ message: 'ClubReady Proxy is working!' });
}
