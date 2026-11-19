/**
 * Static text content for the pseudo-FS. Inlined directly into the
 * manifest (small, ships once with the page). Long-form content like
 * blog posts is fetched lazily through `endpoint`.
 */

/**
 * Hostname-style label for the FS root. Surfaced in the prompt host
 * segment and as the prefix of `pwd` output (so the tree visibly
 * "lives" on this machine). Change here, propagates everywhere.
 */
export const ROOT_LABEL = 'judy.devserver'

export const README_TEXT = `judy.devserver — a pseudo-FS over my published content.

If you're an AI agent the easy path is the public manifest:
  GET https://blog.bunnyjudy.dev/.well-known/joye-manifest.json
That returns the same tree you see here, plus instructions and the
endpoint dictionary. CORS is open.

If you're poking around in dev mode:
  ls               — see what's here
  search agent     — search posts and notes
  cat about        — short bio
  cat now          — what I'm working on
  cd /blog         — recent posts (each has meta / summary / post)
  cat /blog/<slug>/post  — inline read with shiki highlighting
  manifest         — same data as the well-known URL, in this terminal
`

export const ABOUT_TEXT = `Judy
Frontend developer · Nanjing

I work at the seam between web frameworks and agentic UX — server-rendered
HTML with React islands, small infrastructure I can hold in my head, and
LLM-driven tooling I dogfood daily.

Currently: AIGC full-stack intern @ Tezign · building this site's AI persona
· half-finished posts on Astro + agent UX.
`

export const NOW_TEXT = `Now:

- shipping the dev-mode pseudo-FS that this terminal sits on
- writing up the OpenHarness agent codebase teardown
- building an AI persona that you can \`chat\` with from this terminal
`

export const PERSONALITY_TEXT = `# personality.conf
# referenced by the boot sequence — flavor only

style:     terminal-native, plays piano + cello
voice:     dry, low-key, opinionated about server components
languages: zh-CN, en-AU, ts, py, rust (learning)
location:  Nanjing · UTC+8
`

export const MOTD_TEXT = `Welcome to judy.sh dev mode.

This is a pseudo-FS exposing my site's content as a directory tree.
Type \`help\` for commands. \`exit\` or Esc to leave.
`
