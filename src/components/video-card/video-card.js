import './video-card.css'
import { useState, useRef, useEffect } from 'react';

const VideoCard = ({video, setCurrentVideo}) => {

    const [ended, setEnded] = useState(true);
    const [mouseOver, setMouseOver] = useState(false);
    const mainRef = useRef(null);
    const videoRef = useRef(null);
    let mousePosition = {x: 0, y:0};

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            mousePosition.x = event.clientX;
            mousePosition.y = event.clientY;
        }

        window.addEventListener('mousemove', mouseMoveHandler);
        return(()=>{
            window.removeEventListener('mousemove', mouseMoveHandler);
        })
    });

    const onEnded = () => {
        setEnded(true)
    }

    const onInfoClicked = () => {
        setCurrentVideo(video);
    }

    const onMouseOver = () => {
        const bounds = mainRef.current.getBoundingClientRect();

        setTimeout(() => {
            if(
                (bounds.left <= mousePosition.x && mousePosition.x <= bounds.right) &&
                (bounds.top <= mousePosition.y && mousePosition.y <= bounds.bottom)
            ) {
                mainRef.current.style.transform = 'scale(1.5)';
                setMouseOver(() => {
                    setEnded(false);
                    return true;
                });
            }
        }, 500);
    }

    const onMouseOut = () => {
        mainRef.current.style.transform = 'none';
        setMouseOver(() => {
            setEnded(true);
            return false;
        });
    }

    let genres = [];
    video.genres.forEach(element => {
        genres.push(element);
        genres.push(<div key={element}/>);
    });
    genres.pop();

    return (
        <div id='video-card' ref={mainRef} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
            {!ended ? 
                <video 
                    id='video-card-video' 
                    onEnded={onEnded} 
                    ref={videoRef} 
                    autoPlay 
                    muted
                >
                    <source src={video.trailer} />
                </video> : 
                <img id='video-card-poster' src={video.poster} alt={video.displayName} />
            }
            {
                mouseOver &&
                <div id='video-card-info'>
                    <div id='video-card-info-top'>
                        <div id='video-card-info-play'>
                            <img src='./assets/icons/play-icon.png' alt='Play' />
                        </div>
                        <div id='video-card-info-info' onClick={onInfoClicked}>
                            <img src='./assets/icons/forword-arrow.png' alt='Play' />
                        </div>
                    </div>
                    <div id='video-card-info-mid'>
                        <span id='video-card-info-match'>{video.match} Match</span>
                        &nbsp;&nbsp;&nbsp;
                        <span id='video-card-info-rated'>{video.rated}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span id='video-card-info-duration'>{video.duration}</span>
                    </div>
                    <div id='video-card-info-bottom'>
                        {
                            genres
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default VideoCard;