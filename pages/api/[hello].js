// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { hello } = req.query
  res.end(`Post: ${hello}`)
}
