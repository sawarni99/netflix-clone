import './preview-video.css'
import { videos } from '../../assets';
import { useEffect, useRef, useState } from 'react';
import Button from '../button/button';

const PreviewVideo = () => {
    const [ended, setEnded] = useState(false);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);
    const logoRef = useRef(null);
    const descRef = useRef(null);
    const timeout = 5;
    const maxDescLength = 190;
    const video = videos[11];  // Change this by passing props...
    const videoDescription = (video.description.length > maxDescLength) ?
         video.description.substring(0, maxDescLength) + '...' : video.description;

    // Change left side of the screen while video is playing...
    useEffect(() => {
        if(!ended){
            setTimeout(() => {
                logoRef.current.style.width = '70%';
                descRef.current.innerText = null;
                descRef.current.style.height = '0px';
            }, timeout*1000);
        }else{
            logoRef.current.style.width = '100%';
            descRef.current.style.height = '15%';
            descRef.current.innerText = videoDescription;
        }
    }, [ended, videoDescription]);

    const onEnded = () => {
        setEnded(true);
    }

    // Handle right side buttons...
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
                <img onClick={() => setEnded(false)} id='preview-video-img' src={video.previewImg} alt={video.displayName} />
            }

            <div id='preview-video-meta'>
                <div id='preview-video-meta-left'>
                    <div id='preview-video-logo'>
                        <img id='preview-video-logo-img' ref={logoRef} src={video.logo} alt={video.displayName} />
                    </div>
                    <div id='preview-video-desc' ref={descRef}>
                        {videoDescription}
                    </div>
                    <div id='preview-video-info'>
                        <Button 
                            className='preview-video-play-btn' 
                            type='primary' 
                            text='Play' 
                            icon='./assets/icons/play-icon.png'/>

                        <Button 
                            className='preview-video-info-btn' 
                            type='secondary' 
                            text='More Info' 
                            icon='./assets/icons/info-icon.png'/>
                    </div>
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