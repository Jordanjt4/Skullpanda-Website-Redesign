import { Parallax } from 'react-scroll-parallax';

function Description() {
    return (
        <>
            <div className="description-section">
                <div className="parallax-section">
                    <Parallax translateX={['-20', '20']} opacity={[0,1]}>
                        <img className="clouds" id="cloud1" src="/images/cloud1.png" />
                    </Parallax>
                    
                    <Parallax translateX={['10', '-20']} opacity={[0,1]}>
                        <img className="clouds" id="cloud2" src="/images/cloud2.png" />
                    </Parallax>
                    <img className="mainart" src="/images/mainart.png" />
                </div>
                <p id="long-description"> 
                    SKULLPANDA emerged as a distinctive kind of existence. As a universal symbiont, it travels freely between planets, 
                    looks for itself, plays different roles and experiences different lives.  <br /><br />
                    The first time you see SKULLPANDA, you are gripped by an inexplicable force. It dwells in the darkness of empty 
                    endless space, presenting itself as a wide openness, the kind that has no bounds.
                </p>
                <p id="quote">
                    <br /><br /> “SKULLPANDA is another version of myself, but freer and more boundless." - Xiong Miao <br /><br />
                </p>
            </div>
        </>
    )
}

export {Description};