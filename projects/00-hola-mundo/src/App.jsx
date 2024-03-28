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
        userName: 'Erickson',
        name: 'ericson',
        isFollowing: false
    }
]
export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}