import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function Footer() {
    return(
        <div className="footer-container">
            <img id="footer-image" src="/images/footdecor.png" />
            <div className="footer-content">
                <div className="join-the-community">
                    <h2>Join the Community</h2>
                    <p>Be the first to catch our new releases, exclusive offers, and more</p>
                    <form>
                        <input type="text" placeholder="Your email address" />
                    </form>
                    <div className="contact-us">
                        <h2>Contact Us</h2>
                        <h3>Chat</h3>
                        <p>Monday - Sunday 8:00 AM - 2:00 PM PDT</p>
                        <h3>Email</h3>
                        <p>na.support@popmart.com</p>
                        <p>Visit Help Center (FAQ)</p>
                    </div>
                </div>
                <div className="support">
                    <h2>Support</h2>
                    <p>FAQ</p>
                    <p>Shipping Info</p>
                    <p>Privacy Policy</p>
                    <p>Track your Order</p>
                    <p>Find a Store</p>
                    <p>Returns</p>
                    <p>Pop Blocks</p>
                    <p>Order Failure Guide</p>
                    <p>Exchange</p>
                </div>
                <div className="about-us">
                    <h2>About Us</h2>
                    <p>News</p>
                    <p>Artists</p>
                    <p>About Popmart</p>
                    <p>Investor Relations</p>
                    <p>Careers</p>
                </div>
                <div className="shop">
                    <h2>Shop</h2>
                    <p>Launch Platform</p>
                    <p>Trending</p>
                    <p>Blind Boxes</p>
                    <p>Mega Collections</p>
                    <p>Accessories</p>
                </div>
            </div>
        </div>
    )
}

function FooterMobile() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className="footer-container">
            <img id="footer-image" src="/images/footdecor.png" />
            <div className="footer-content">
                <div className="footer-wrapper">
                    <div className="accordian">
                        <div className="item">
                            <div className="title" onClick={() => toggle("join")}>
                                <h4>Join the Community</h4>
                                <span>{(selected === 'join' ? '-' : '+')}</span>
                            </div>
                            <div className={(selected === 'join'? 'content show' : 'content')}>
                                <p>Be the first to catch our new releases, exclusive offers, and more</p>
                                <form>
                                    <input type="text" placeholder="Your email address" />
                                </form>
                                <div className="contact-us">
                                    <h2>Contact Us</h2>
                                    <h3>Chat</h3>
                                    <p>Monday - Sunday 8:00 AM - 2:00 PM PDT</p>
                                    <h3>Email</h3>
                                    <p>na.support@popmart.com</p>
                                    <p>Visit Help Center (FAQ)</p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="title" onClick={() => toggle("support")}>
                                <h4>Support</h4>
                                <span>{(selected === 'support' ? '-' : '+')}</span>
                            </div>
                            <div className={(selected === 'support'? 'content show' : 'content')}>
                                <p>FAQ</p>
                                <p>Shipping Info</p>
                                <p>Privacy Policy</p>
                                <p>Track your Order</p>
                                <p>Find a Store</p>
                                <p>Returns</p>
                                <p>Pop Blocks</p>
                                <p>Order Failure Guide</p>
                                <p>Exchange</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="title" onClick={() => toggle("aboutus")}>
                                <h4>About Us</h4>
                                <span>{(selected === 'aboutus' ? '-' : '+')}</span>
                            </div>
                            <div className={(selected === 'aboutus'? 'content show' : 'content')}>
                                <p>FAQ</p>
                                <p>Shipping Info</p>
                                <p>Privacy Policy</p>
                                <p>Track your Order</p>
                                <p>Find a Store</p>
                                <p>Returns</p>
                                <p>Pop Blocks</p>
                                <p>Order Failure Guide</p>
                                <p>Exchange</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="title" onClick={() => toggle("shop")}>
                                <h4>Shop</h4>
                                <span>{(selected === 'shop' ? '-' : '+')}</span>
                            </div>
                            <div className={(selected === 'shop'? 'content show' : 'content')}>
                                <p>Launch Platform</p>
                                <p>Trending</p>
                                <p>Blind Boxes</p>
                                <p>Mega Collections</p>
                                <p>Accessories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FooterComponent() {
    const isDesktop = useMediaQuery({minWidth: 800});

    return isDesktop ? <Footer /> : <FooterMobile />
}

export default FooterComponent;