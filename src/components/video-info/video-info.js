import './video-info.css';
import PreviewVideo from '../preview-video/preview-video';

const VideoInfo = () => {
    return (
        <div id='video-info'>
            <div id='video-info-video'>
                <PreviewVideo info={true} />
            </div>
        </div>
    )
}

export default VideoInfo;