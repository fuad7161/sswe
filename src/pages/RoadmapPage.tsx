import React from 'react'
import { roadmapData } from '../data/roadmapData'

export default function RoadmapPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Roadmap</h1>
            {roadmapData.map(section => (
                <section key={section.id} style={{ marginBottom: 20 }}>
                    <h2>{section.title}</h2>
                    {section.topics.map((t, i) => (
                        <div key={i} style={{ paddingLeft: 12 }}>
                            <h3>{t.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {t.items.map((it, ii) => (
                                    <div key={ii} style={{ padding: '6px 10px', border: '1px solid #ddd', borderRadius: 6 }}>{it}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            ))}
        </div>
    )
}
