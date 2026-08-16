import React from 'react'
import RoadmapPage from './pages/RoadmapPage'
import ResourcesPage from './pages/ResourcesPage'

export default function App() {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
    const page = hash || 'roadmap'

    return (
        <div>
            <header style={{ padding: 12, borderBottom: '1px solid #eee' }}>
                <a href="#roadmap" style={{ marginRight: 12 }}>Roadmap</a>
                <a href="#resources">Resources</a>
            </header>
            <main>
                {page === 'resources' ? <ResourcesPage /> : <RoadmapPage />}
            </main>
        </div>
    )
}
