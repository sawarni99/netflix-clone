import './section-video-preview.css'
import { useState, useRef, useEffect } from 'react';
import VideoInfo from '../video-info/video-info';

const SectionVideoPreview = ({video}) => {

    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const [infoClicked, setInfoClicked] = useState(false);
    const videoRef = useRef(null);

    const onEnded = () => {
        setEnded(true)
    }

    let genres = [];
    video.genres.forEach(element => {
        genres.push(element);
        genres.push(<div/>);
    });
    genres.pop();

    useEffect(() => {
        if(!ended){
            if(infoClicked) {
                videoRef.current.pause();
            }else {
                videoRef.current.play();
            }
        }
    })

    const onClickInfo = () => {
        setInfoClicked(infoClicked => !infoClicked);
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
                    <div id='section-video-preview-info-info' onClick={onClickInfo}>
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
            { infoClicked &&<VideoInfo video={video} startTime={0} onInfoClicked={onClickInfo} infoClicked={infoClicked} /> }
        </div>
    )
}

export default SectionVideoPreview;