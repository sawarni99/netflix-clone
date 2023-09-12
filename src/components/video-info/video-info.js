import './video-info.css';
import PreviewVideo from '../preview-video/preview-video';
import { useRef } from 'react';

const VideoInfo = ({video, onInfoClicked, startTime}) => {

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
                        startTime={startTime} 
                    />

                    <div id='video-info-info'>
                        <div id='video-info-gradient' />
                        <div id='video-info-left'>
                            <div id='video-info-left-general'>
                                <span>{video.match} Match</span>
                                &nbsp; &nbsp;
                                {video.duration}
                            </div>
                            <div id='video-info-left-rated'>
                                {video.rated}
                            </div>
                            <div id='video-info-left-desc'>
                                {video.description}
                            </div>
                        </div>
                        <div id='video-info-right'>
                            <div id='video-info-right-genre'>
                                <span>Genres: </span>
                                &nbsp;
                                {video.genres.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo;