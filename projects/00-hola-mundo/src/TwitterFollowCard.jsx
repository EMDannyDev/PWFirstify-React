
export function TwitterFollowCard({ children, userName = 'valor por defecto', isFollowing }) {
    const imgSrc = `https://unavatar.io/${userName}`
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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}