import './preview-video.css'
import { videos } from '../../assets';
import { useRef, useState } from 'react';

const PreviewVideo = () => {
    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);
    const video = videos[12];  // Change this by passing props...

    const onEnded = () => {
        setEnded(true);
    }

    const onClickControl = () =>{
        if(ended){
            setEnded(false);
        }else{
            if(muted){
                videoRef.current.muted = false;
                setMuted(false);
            }else{
                videoRef.current.muted = true;
                setMuted(true);
            }
        }
    }

    return (
        <div id='preview-video'>
            {!ended ? 
                <video onEnded={onEnded} ref={videoRef} id='preview-video-video' autoPlay muted={muted}>
                    <source src={video.trailer} />
                </video> : 
                <img onClick={() => setEnded(false)} id='preview-video-img' src={video.previewImg} alt="Nothing to Show" />
            }

            <div id='preview-video-meta'>
                <div id='preview-video-meta-left'>
                    <div id='preview-video-logo'></div>
                    <div id='preview-video-desc'></div>
                    <div id='preview-video-info'></div>
                </div>
                <div id='preview-video-meta-right'>
                    <div id='preview-video-control' onClick={onClickControl}>
                        {
                            (ended) ?
                                <img className='preview-video-control-img' src='./assets/icons/replay-icon.png' alt='Replay' /> :
                                
                                (muted) ? 
                                    <img className='preview-video-control-img' src='./assets/icons/sound-off-icon.png' alt='Unmute' /> :
                                    <img className='preview-video-control-img' src='./assets/icons/sound-on-icon.png' alt='Mute' />
                        }
                    </div>
                    <div id='preview-video-rated'>{video.rated}</div>
                </div>
            </div>
        </div>
    )
}

export default PreviewVideo;