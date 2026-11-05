import { useEffect, useState } from 'react'
import { ArrowUpRight, GitHub, Star } from './Icons.jsx'

// Pulls your latest public repositories from the GitHub API at page load.
// If the request fails (rate limit, offline), it falls back to a simple link.
export default function GitHubRepos({ user, url }) {
  const [repos, setRepos] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=12`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => setRepos(data.filter((r) => !r.fork).slice(0, 6)))
      .catch((e) => { if (e?.name !== 'AbortError') setFailed(true) })
    return () => ctrl.abort()
  }, [user])

  if (failed || (repos && repos.length === 0)) {
    return (
      <a className="repo repo--fallback" href={url} target="_blank" rel="noreferrer">
        <GitHub width={28} height={28} />
        <div>
          <strong>github.com/{user}</strong>
          <p>Browse my repositories, experiments and open-source work.</p>
        </div>
        <ArrowUpRight />
      </a>
    )
  }

  if (!repos) {
    return (
      <div className="repos">
        {Array.from({ length: 3 }).map((_, i) => <div key={i} className="repo repo--skeleton" />)}
      </div>
    )
  }

  return (
    <div className="repos">
      {repos.map((r) => (
        <a key={r.id} className="repo" href={r.html_url} target="_blank" rel="noreferrer">
          <div className="repo__head">
            <GitHub />
            <strong>{r.name}</strong>
            <ArrowUpRight className="repo__arrow" />
          </div>
          <p>{r.description || 'No description yet.'}</p>
          <div className="repo__meta">
            {r.language && <span><i className="lang-dot" />{r.language}</span>}
            {r.stargazers_count > 0 && <span><Star width={14} height={14} />{r.stargazers_count}</span>}
            <span>Updated {new Date(r.pushed_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
