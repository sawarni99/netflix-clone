import './section-video.css'
import { useState, useRef } from 'react';
import VideoInfo from '../video-info/video-info';

const SectionVideo = ({video}) => {

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
            <div id='section-video' ref={mainRef} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                {!ended ? 
                    <video 
                        id='section-video-video' 
                        onEnded={onEnded} 
                        ref={videoRef} 
                        autoPlay 
                        muted
                    >
                        <source src={video.trailer} />
                    </video> : 
                    <img id='section-video-poster' src={video.poster} alt={video.displayName} />
                }
                {
                    mouseOver &&
                    <div id='section-video-info'>
                        <div id='section-video-info-top'>
                            <div id='section-video-info-play'>
                                <img src='./assets/icons/play-icon.png' alt='Play' />
                            </div>
                            <div id='section-video-info-info' onClick={onInfoClicked}>
                                <img src='./assets/icons/forword-arrow.png' alt='Play' />
                            </div>
                        </div>
                        <div id='section-video-info-mid'>
                            <span id='section-video-info-match'>{video.match} Match</span>
                            &nbsp;&nbsp;&nbsp;
                            <span id='section-video-info-rated'>{video.rated}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span id='section-video-info-duration'>{video.duration}</span>
                        </div>
                        <div id='section-video-info-bottom'>
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
                    infoClicked={infoClicked} /> 
            }
        </>
    )
}

export default SectionVideo;