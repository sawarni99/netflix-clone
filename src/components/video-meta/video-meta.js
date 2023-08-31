import './video-meta.css'
import { useEffect, useRef } from 'react';
import Button from '../button/button';

const VideoMeta = ({video, videoRef, ended, setEnded, muted, setMuted}) => {

    const logoRef = useRef(null);
    const descRef = useRef(null);
    const timeout = 5;
    const maxDescLength = 190;
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
        <div id='video-meta'>
            <div id='video-meta-left'>
                <div id='video-logo'>
                    <img id='video-logo-img' ref={logoRef} src={video.logo} alt={video.displayName} />
                </div>
                <div id='video-desc' ref={descRef}>
                    {videoDescription}
                </div>
                <div id='video-more-info'>
                    <Button 
                        className='video-play-btn' 
                        type='primary' 
                        text='Play' 
                        icon='./assets/icons/play-icon.png'/>

                    <Button 
                        className='video-info-btn' 
                        type='secondary' 
                        text='More Info' 
                        icon='./assets/icons/info-icon.png'/>
                </div>
            </div>
            <div id='video-meta-right'>
                <div id='video-control' onClick={onClickControl}>
                    {
                        (ended) ?
                            <img className='video-control-img' src='./assets/icons/replay-icon.png' alt='Replay' /> :
                            
                            (muted) ? 
                                <img className='video-control-img' src='./assets/icons/sound-off-icon.png' alt='Unmute' /> :
                                <img className='video-control-img' src='./assets/icons/sound-on-icon.png' alt='Mute' />
                    }
                </div>
                <div id='video-rated'>{video.rated}</div>
            </div>
        </div>
    )
}

export default VideoMeta;