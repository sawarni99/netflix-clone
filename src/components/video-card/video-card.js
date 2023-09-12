import './video-card.css'
import { useState, useRef } from 'react';
import VideoInfo from '../video-info/video-info';

const VideoCard = ({video}) => {

    const [ended, setEnded] = useState(true);
    const [mouseOver, setMouseOver] = useState(false);
    const [infoClicked, setInfoClicked] = useState(false);
    const mainRef = useRef(null);
    const videoRef = useRef(null);

    const onEnded = () => {
        setEnded(true)
    }

    const onInfoClicked = () => {
        setInfoClicked(infoClicked => !infoClicked);
    }

    const onMouseOver = () => {
        setMouseOver(() => {
            setEnded(false);
            return true;
        });
    }

    const onMouseOut = () => {
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
        <>
            <div id='video-card' ref={mainRef} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
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
            { 
            infoClicked && 
            <VideoInfo 
                video={video} 
                onInfoClicked={onInfoClicked} 
                infoClicked={infoClicked} 
                startTime={0}
                /> 
            }
            
        </>
    )
}

export default VideoCard;