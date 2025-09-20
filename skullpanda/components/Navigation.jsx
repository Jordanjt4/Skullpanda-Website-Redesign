function Navigation() {
    return (
        <>
            <div className="scallop"> 
            <div className="navigation-header">
                <div className="navigation-logo">
                    <img className="logo" src="/images/skullpanda-logo.png" />
                    <h1>SkullPanda</h1>
                </div>
                <div className="navigation-buttons">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
        </div>
        </>
    )
}

function Header() {
    return (
        <>
            <div className="main-header">
                <div className="header-image">
                    <div className="header-content">
                        <h1>Unveil unique chapters of a universe-traversing journey</h1>
                        <div className="learn-more">Learn More</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export {Navigation, Header};