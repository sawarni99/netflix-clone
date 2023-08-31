import './preview-video.css'
import { videos } from '../../assets';
import { useRef, useState } from 'react';
import VideoMeta from '../video-meta/video-meta';

const PreviewVideo = () => {
    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const video = videos[11];
    const videoRef = useRef(null);

    const onEnded = () => {
        setEnded(true);
    }

    return (
        <div id='preview-video'>
            {!ended ? 
                <video onEnded={onEnded} ref={videoRef} id='preview-video-video' autoPlay muted={muted}>
                    <source src={video.trailer} />
                </video> : 
                <img id='preview-video-img' src={video.previewImg} alt={video.displayName} />
            }
            <VideoMeta 
                video={video} 
                videoRef={videoRef} 
                ended={ended} 
                setEnded={setEnded} 
                muted={muted}
                setMuted={setMuted}
            />
        </div>
    )
}

export default PreviewVideo;