import './video-info.css';
import PreviewVideo from '../preview-video/preview-video';
import { useRef } from 'react';

const VideoInfo = ({video, onInfoClicked, startTime, infoClicked}) => {

    const containerRef = useRef(null);

    const onClickBackground = (event) => {
        if(event.target === containerRef.current){
            onInfoClicked(0);   
        }
    }

    return (
        <div id='video-info'>
            <div id='video-info-container' ref={containerRef} onClick={onClickBackground}>
                <div id='video-info-video'>
                    <PreviewVideo 
                        info={true} 
                        video={video} 
                        onInfoClicked={onInfoClicked} 
                        infoClicked={infoClicked} 
                        startTime={startTime} 
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoInfo;