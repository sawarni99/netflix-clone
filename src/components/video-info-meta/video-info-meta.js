import './video-info-meta.css'
import Button from '../button/button'

const VideoInfoMeta = ({video, videoRef, ended, setEnded, muted, setMuted, onInfoClicked}) =>{

    const toggleSound = () => {
        if(!ended){
            videoRef.current.muted = !muted;
        }
        setMuted(muted => !muted);
    }

    const onClickClose = () => {
        if(ended){
            onInfoClicked(0);
        }else{
            onInfoClicked(videoRef.current.currentTime);
        }
    }

    return (
        <div id='video-info-meta'>
            <div id='video-info-meta-top'>
                <div id='video-info-meta-close' onClick={onClickClose}>
                    <img id='video-info-meta-close-img' src='./assets/icons/close-icon.png' alt='X' />
                </div>
            </div>
            <div id='video-info-meta-center'>
                <div id='video-info-meta-logo'>
                    <img id='video-info-meta-logo-img' src={video.logo} alt={video.description} />
                </div>
            </div>
            <div id='video-info-meta-bottom'>
                <div id='video-info-meta-play'>

                    <Button 
                        className='video-info-meta-btn' 
                        type='primary' 
                        text='Play' 
                        icon='./assets/icons/play-icon.png'
                    />

                </div>
                <div id='video-info-meta-vol' onClick={toggleSound}>
                    {
                        (muted) ? 
                        <img id='video-info-meta-vol-img' src='./assets/icons/sound-off-icon.png' alt='Off' />:
                        <img id='video-info-meta-vol-img' src='./assets/icons/sound-on-icon.png' alt='On' />
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoInfoMeta