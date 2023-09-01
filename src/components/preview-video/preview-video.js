import './preview-video.css'
import { useRef, useState } from 'react';
import VideoMeta from '../video-meta/video-meta';
import VideoInfoMeta from '../video-info-meta/video-info-meta';

const PreviewVideo = ({info, video, onInfoClicked, startTime, infoClicked}) => {
    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    if(!startTime){
        startTime = 0;
    }

    const onEnded = () => {
        setEnded(true);
    }

    const onLoadedMetadata = () => {
        videoRef.current.currentTime = startTime;
    }

    return (
        <div id='preview-video'>
            {!ended ? 
                <video 
                    id='preview-video-video' 
                    onEnded={onEnded} 
                    onLoadedMetadata={onLoadedMetadata}
                    ref={videoRef} 
                    autoPlay 
                    muted={muted}
                >
                    <source src={video.trailer} />
                </video> : 
                <img id='preview-video-img' src={video.previewImg} alt={video.displayName} />
            }
            {
                (info) ? 
                <VideoInfoMeta 
                    video={video} 
                    videoRef={videoRef} 
                    ended={ended} 
                    setEnded={setEnded} 
                    muted={muted}
                    setMuted={setMuted}
                    onInfoClicked={onInfoClicked}
                /> :

                <VideoMeta 
                    video={video} 
                    videoRef={videoRef} 
                    ended={ended} 
                    setEnded={setEnded} 
                    muted={muted}
                    setMuted={setMuted}
                    onInfoClicked={onInfoClicked}
                    infoClicked={infoClicked}
                />
            }
        </div>
    )
}

export default PreviewVideo;