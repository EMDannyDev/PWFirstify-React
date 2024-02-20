import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const everdream = { isFollowing: true, userName: 'Everdream' }
    return (
        <section className='App'>
            <TwitterFollowCard {...everdream}>
                <strong>Emerson Mendoza</strong>
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName="AQUINOby_02">
                <h1>Aquino</h1>
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing >
                <strong>Miguel Angel</strong>
            </TwitterFollowCard>
        </section>
    )
}