export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { messages = [] } = req.body ?? {};
  const latest = messages.at(-1)?.content;

  return res.status(200).json({
    text: latest
      ? `The starter endpoint received: "${latest}". Replace api/chat.js with your agent.`
      : "The starter endpoint is connected. Replace api/chat.js with your agent.",
  });
}
