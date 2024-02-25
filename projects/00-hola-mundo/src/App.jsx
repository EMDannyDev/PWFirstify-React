import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="everdream">
                <strong>Emerson Mendoza</strong>
            </TwitterFollowCard>

            <TwitterFollowCard userName="AQUINOby_02">
                <strong>Aquino</strong>
            </TwitterFollowCard>

            <TwitterFollowCard >
                <strong>Miguel Angel</strong>
            </TwitterFollowCard>
        </section>
    )
}