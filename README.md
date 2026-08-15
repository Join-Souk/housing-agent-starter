# Student Housing Agent — starter

This repository supplies the chat and deployment plumbing for the take-home. It
does not prescribe a model, framework, agent architecture, retrieval design, or
property presentation.

You may use the interface unchanged or modify it. Visual polish is not assessed.

## Run locally

Requires a recent Node.js version.

```bash
npm run dev
# open http://localhost:3000
```

The supplied endpoint returns a canned response, so the shell works before you
add a model provider or credentials.

## Connect your agent

Replace the implementation in `api/chat.js`. The browser sends:

```json
{
  "messages": [
    { "role": "user", "content": "I'm looking for a place in Leeds" }
  ]
}
```

Return at least:

```json
{
  "text": "Your agent's reply"
}
```

Keep credentials in server-side environment variables. Do not embed them in
`public/index.html` or commit them.

## Files

| Path | Purpose |
|---|---|
| `public/index.html` | Chat interface and `/api/chat` request |
| `public/bui.css` | Bundled interface styles |
| `api/chat.js` | Server endpoint to replace with your agent |
| `server.mjs` | Local development server |
| `vercel.json` | Preview deployment configuration |

## Deploy a preview

This starter is configured for Vercel. Add any model-provider credentials as
server-side environment variables in the hosting project before deploying.

## Credits

The interface adapts components and design tokens from
[Beautiful UI](https://www.beautifului.dev/) by Turbo Design Studio.
