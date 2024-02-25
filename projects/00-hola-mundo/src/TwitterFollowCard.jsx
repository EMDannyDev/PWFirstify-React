import { useState } from "react"

export function TwitterFollowCard({ children, userName = 'valor por defecto' }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleclick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar de Usuario"
                    src={imgSrc}
                />
                <div className='tw-followCard-info'>
                    {children}
                    <span className='tw-followCard-infoUseName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClasName} onClick={handleclick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}