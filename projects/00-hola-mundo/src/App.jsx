import './App.css'
import React from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="everdream" name="Emerson Mendoza" />
            <TwitterFollowCard isFollowing={false} userName="shxto" name="Artista Ero" />
            <TwitterFollowCard isFollowing userName="AQUINOby_02" name="Aquino" />
        </section>
    )
}