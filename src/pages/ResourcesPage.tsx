import React from 'react'
import { resourcesData } from '../data/resourcesData'

export default function ResourcesPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Resources</h1>
            {resourcesData.map(level => (
                <section key={level.level} style={{ marginBottom: 20 }}>
                    <h2>{level.level} — {level.title}</h2>
                    <p style={{ color: '#666' }}>{level.desc}</p>
                    {level.categories.map((cat, ci) => (
                        <div key={ci} style={{ marginTop: 8 }}>
                            <h4>{cat.name}</h4>
                            <ul>
                                {cat.items.map((it, ii) => (
                                    <li key={ii}>
                                        {it.title} {it.url ? (<a href={it.url} target="_blank" rel="noreferrer">↗</a>) : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            ))}
        </div>
    )
}
