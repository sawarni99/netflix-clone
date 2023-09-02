import './section-video-preview.css'
import { useState, useRef, useEffect } from 'react';

const SectionVideoPreview = ({video, onClickInfo}) => {

    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    const onEnded = () => {
        setEnded(true)
    }

    let genres = [];
    video.genres.forEach(element => {
        genres.push(element);
        genres.push(<div key={element}/>);
    });
    genres.pop();

    const onInfoClicked = () => {
        onClickInfo();
    }

    return (
        <div id='section-video-preview'>
            {!ended ? 
                <video 
                    id='section-video-preview-video' 
                    onEnded={onEnded} 
                    ref={videoRef} 
                    autoPlay 
                    muted={muted}
                >
                    <source src={video.trailer} />
                </video> : 
                <img id='section-video-preview-poster' src={video.poster} alt={video.displayName} />
            }
            <div id='section-video-preview-info'>
                <div id='section-video-preview-info-top'>
                    <div id='section-video-preview-info-play'>
                        <img src='./assets/icons/play-icon.png' alt='Play' />
                    </div>
                    <div id='section-video-preview-info-info' onClick={onInfoClicked}>
                        <img src='./assets/icons/forword-arrow.png' alt='Play' />
                    </div>
                </div>
                <div id='section-video-preview-info-mid'>
                    <span id='section-video-preview-info-match'>{video.match} Match</span>
                    &nbsp;&nbsp;&nbsp;
                    <span id='section-video-preview-info-rated'>{video.rated}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span id='section-video-preview-info-duration'>{video.duration}</span>
                </div>
                <div id='section-video-preview-info-bottom'>
                    {
                        genres
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionVideoPreview;