import './section-video.css'
import SectionVideoPreview from '../section-video-preview/section-video-preview';
import { useState } from 'react';
import VideoInfo from '../video-info/video-info';

const SectionVideo = ({video}) =>{

    const [showPreview, setShowPreview] = useState(false);
    const [infoClicked, setInfoClicked] = useState(false);

    const onClickInfo = () => {
        setShowPreview(false);
        setInfoClicked(infoClicked => {
            return !infoClicked;
        })
    }

    const onMouseOver = () => {
        if(!infoClicked){
            setShowPreview(true);
        }
    }

    const onMouseOut = () => {
        setShowPreview(false);
    }

    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} id='section-video'>
            {
                (showPreview) ? 
                    <SectionVideoPreview video={video} onClickInfo={onClickInfo} /> :
                    <img id='section-video-poster' src={video.poster} alt={video.displayName} />
            }
            { infoClicked && <VideoInfo video={video} startTime={0} onInfoClicked={onClickInfo} infoClicked={infoClicked} /> }
        </div>
    )
}

export default SectionVideo;