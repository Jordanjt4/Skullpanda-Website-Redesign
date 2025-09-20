import {useState, useEffect, useRef} from 'react';
import gsap from 'gsap'

function ImageSlider({images, title}) {
    const [midImage, setMidImage] = useState(0);
    const [leftImage, setLeftImage] = useState(0);
    const [rightImage, setRightImage] = useState(0);
    const rootRef = useRef(null);
    const $ = gsap.utils.selector(rootRef);

    const Decrement = () => {
        if (midImage == 0) {
            setMidImage(images.length - 1);
        } else {
            setMidImage(midImage - 1);
        }
    }
    const Increment = () => {
        if (midImage == images.length - 1) {
            setMidImage(0);
        } else {
            setMidImage(midImage + 1);
        }
    }
    useEffect(() => {
        if (midImage == 0) {
            setLeftImage(images.length-1)
            setRightImage(midImage + 1)
        } else if (midImage == (images.length-1)) {
            setRightImage(0)
            setLeftImage(midImage - 1)
        } else {
            setLeftImage(midImage - 1)
            setRightImage(midImage + 1)
        }

        gsap.fromTo($('.right-image'), 
            {x: -300, opacity: 0, scale: 0.6},
            {x: 0, opacity: 1, scale: 1, duration: 0.5});

        gsap.fromTo($('.left-image'), 
            {x: 300, opacity: 0, scale: 0.6},
            {x: 0, opacity: 1, scale: 1, duration: 0.5});

        gsap.fromTo($('.middle-image'), 
            {x: -300, opacity: 0, scale: 0.6},
            {x: 0, opacity: 1, scale: 1, duration: 0.5});
    }, [midImage])

    return (
        <div className="image-slide-container" ref={rootRef}>
            <h1>{title}</h1>
            <div className="images-container">
                <button className="left-button" onClick={() => Decrement()}>{"<"}</button>
                    <div className="images">
                        <img src={`./images/${images[leftImage]}`} className="left-image" />
                        <img src={`./images/${images[midImage]}`} className="middle-image" />
                        <img src={`./images/${images[rightImage]}`} className="right-image" />
                    </div>
                <button className="right-button" onClick={() => Increment()}>{">"}</button>
            </div>

            <div className="dots">
                {images.map((image, index) => (
                    <div key={index} className={`dot${index === midImage? ` active` : ` passive`}`}></div>
                ))}
            </div>
        </div>
    )
}

function ImageContainer({impressionImages, impressionTitle, warmthImages, warmthTitle}) {
    return (
        <div className="images-slider">
            <div className="images-full-container">
                <ImageSlider images={impressionImages} title={impressionTitle} />
                <ImageSlider images={warmthImages} title={warmthTitle}/>
            </div>
        </div>
    )
}

export default ImageContainer;