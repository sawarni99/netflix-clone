import './preview-video.css'
import { videos } from '../../assets';
import { useEffect, useRef, useState } from 'react';

const PreviewVideo = () => {
    const [ended, setEnded] = useState(false);
    const videoRef = useRef(null);
    const video = videos[12];  // Change this by passing props...

    const onEnded = () => {
        setEnded(true);
    }

    const onPlay = () => {
        console.log("Play");
    }

    return (
        <div id='preview-video'>
            {!ended ? 
                <video onEnded={onEnded} onPlay={onPlay} ref={videoRef} id='preview-video-video' autoPlay muted>
                    <source src={video.trailer} />
                </video> : 
                <img onClick={() => setEnded(false)} id='preview-video-img' src={video.previewImg} alt="Nothing to Show" />
            }

            <div id='preview-video-meta'>
                <div id='preview-video-meta-left'>
                    <div id='preview-video-logo'></div>
                    <div id='preview-video-desc'></div>
                    <div id='preview-logo-info'></div>
                </div>
                <div id='preview-video-meta-right'></div>
            </div>
        </div>
    )
}

export default PreviewVideo;