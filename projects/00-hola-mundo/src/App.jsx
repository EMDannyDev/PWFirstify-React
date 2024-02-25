import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'AQUINOby_02',
        name: 'Diego Aquino',
        isFollowing: false
    },
    {
        userName: 'Angel',
        name: 'Angel Mamamni*2',
        isFollowing: true
    },
    {
        userName: 'Everdream',
        name: 'Ever',
        isFollowing: false
    }
]
export function App() {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}